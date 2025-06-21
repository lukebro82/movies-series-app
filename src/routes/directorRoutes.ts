import { Router } from "express";
import {
  createDirector,
  getAllDirectors,
} from "../controllers/directorController";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newdirector = await createDirector(req.body);
    res.status(201).json(newdirector);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const directors = await getAllDirectors();
    res.status(200).json(directors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
