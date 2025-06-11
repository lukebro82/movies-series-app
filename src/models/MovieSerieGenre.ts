import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class MovieSerieGenre extends Model {}

MovieSerieGenre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Genre",
        key: "id",
      },
    },
    movie_serie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MovieSerie",
        key: "id",
      },
    },
  },
  { sequelize, modelName: "MovieSerieGenre" }
);
