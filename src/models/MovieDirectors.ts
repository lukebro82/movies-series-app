import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class MovieDirector extends Model {}

MovieDirector.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MovieSerie",
        key: "id",
      },
      primaryKey: true,
    },
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Director",
        key: "id",
      },
      primaryKey: true,
    },
  },
  { sequelize, modelName: "MovieDirector" }
);
