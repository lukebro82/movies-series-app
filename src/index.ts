import "./devenv";
import express from "express";
import cors from "cors";
import { authMiddleware } from "./controllers/authController";
import authRoutes from "./routes/authRoutes";
import directorRoutes from "./routes/directorRoutes";
import movieseries from "./routes/movieseriesRoutes";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/test", authMiddleware, (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/director", directorRoutes);
app.use("/movieseries", movieseries);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
