import { Router } from "express";
import {
  createMovieserie,
  addDirectorToMovieserie,
  getAllMovieseries,
} from "../controllers/movieseriesControllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const movies = await getAllMovieseries();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const newMovie = req.body;

  try {
    const movieCreated = await createMovieserie(newMovie);
    res.status(201).json(movieCreated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/director", async (req, res) => {
  const { movieSerieId, directorId } = req.body;
  try {
    const result = await addDirectorToMovieserie(movieSerieId, directorId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
