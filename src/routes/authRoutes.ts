import express from "express";
import {
  createAuth,
  createToken,
  createUser,
  authMiddleware,
} from "../controllers/authController";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password, name, avatar_url } = req.body;

  try {
    const newAuth = await createAuth({ email, password });
    const userNew = await createUser({
      auth_id: newAuth.get("id"),
      name,
      avatar_url,
    });

    res.status(201).json({
      message: "Usuario creado con exito",
      userNew: { newAuth, userNew },
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/token", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await createToken(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
