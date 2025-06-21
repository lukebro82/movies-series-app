import { Director, directorCreationAttributes, MovieSerie } from "../models/";

export async function createDirector(director: directorCreationAttributes) {
  const { name, birth_date, bio, photo_url } = director;

  try {
    const existing = await Director.findOne({
      where: {
        name,
        birth_date,
      },
    });

    if (existing) {
      throw new Error("The director already exists in the database.");
    }

    const newDirector = await Director.create({
      name,
      birth_date,
      bio,
      photo_url,
    });
    return newDirector;
  } catch (error) {
    throw new Error(error.message || "Error getting director");
  }
}

export async function getAllDirectors() {
  try {
    const directors = await Director.findAll({
      include: {
        model: MovieSerie,
        attributes: [
          "type",
          "title",
          "duration",
          "description",
          "release_date",
          "poster_url",
        ],
        through: { attributes: [] },
      },
    });
    return directors;
  } catch (error) {
    throw new Error(error.message || "Error getting directors");
  }
}
