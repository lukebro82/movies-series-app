import "./devenv";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

//borrar test
app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/auth", async (req: Request, res: Response) => {
  const { email, password, name, avatar_url } = req.body;

  try {
    // const newAuth = await createAuth(email, password);
    // const userNew = await createUser(name, location, newAuth.get("id"));

    res.status(201).json({ message: "Usuario creado con exito" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
