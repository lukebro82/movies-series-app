import {
  Auth,
  User,
  AuthCreationAttributes,
  UserCreationAttributes,
} from "../models";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

const secretWord = process.env.SECRET_WORD;

function getSHA256ofString(text: string) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

export async function createAuth({ email, password }: AuthCreationAttributes) {
  const hashedPassword = await getSHA256ofString(password);
  try {
    let auth = await Auth.findOne({ where: { email } });
    if (auth) {
      throw new Error("Email already exists");
    }
    auth = await Auth.create({
      email,
      password: hashedPassword,
    });
    return auth;
  } catch (error: unknown) {
    console.error("Error creating auth:", error);
    if (error instanceof Error && error.message === "Email already exists") {
      throw error;
    }
    throw new Error("Error creating auth");
  }
}

export async function createUser({
  auth_id,
  name,
  avatar_url,
}: UserCreationAttributes) {
  try {
    const user = await User.create({
      auth_id,
      name,
      avatar_url,
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
}

export async function createToken(email: string, password: string) {
  if (!secretWord) {
    throw new Error("SECRET_WORD is not defined");
  }

  const passwordHashed = await getSHA256ofString(password);

  try {
    const auth = await Auth.findOne({
      where: { email, password: passwordHashed },
      include: [{ model: User, attributes: ["id"] }],
    });

    if (!auth) {
      throw new Error("Invalid credentials");
    }

    const user = auth.get("User") as any;
    if (!user) {
      throw new Error("User not found");
    }

    const token = jwt.sign({ id: user.id }, secretWord);
    return token;
  } catch (error) {
    console.error("Error creating token:", error);
    throw new Error("Error creating token");
  }
}

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const data = jwt.verify(token, secretWord);
    req._user = data;
    next();
  } catch (error) {
    res.status(401).json({ error: "no autorizado" });
  }
}
