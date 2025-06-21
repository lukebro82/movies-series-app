import { MovieSerie, MovieseriesCreateAttributes, Director } from "../models";

export async function createMovieserie(
  movieserie: MovieseriesCreateAttributes
) {
  const { type, title, duration, description, release_date, poster_url } =
    movieserie;

  try {
    const movieserie = await MovieSerie.findOne({ where: { title } });
    if (movieserie) {
      throw new Error("already exists");
    }

    const newMovieserie = await MovieSerie.create({
      type,
      title,
      duration,
      description,
      release_date,
      poster_url,
    });

    return newMovieserie;
  } catch (error) {
    throw new Error(error.message || "Creation movie/serie ERROR");
  }
}

export async function getAllMovieseries() {
  try {
    const movies = await MovieSerie.findAll({
      include: {
        model: Director,
        attributes: ["id", "name", "birth_date", "photo_url"],
        through: { attributes: [] },
      },
    });
    return movies;
  } catch (error) {
    throw new Error(error.message || "Error getting movies/series");
  }
}

export async function addDirectorToMovieserie(movieserieId, directorId) {
  try {
    const movieSerie = await MovieSerie.findByPk(movieserieId);
    const director = await Director.findByPk(directorId);

    if (!movieSerie || !director) {
      throw new Error("Película/Serie or Director no found");
    }

    // Vincular usando la relación many-to-many
    await (movieSerie as any).addDirector(director);
    return { message: "Director vinculado correctamente" };
  } catch (error) {
    throw new Error(error.message || "add director ERROR");
  }
}
