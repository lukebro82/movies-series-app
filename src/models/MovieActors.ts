import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class MovieActor extends Model {}

MovieActor.init(
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
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Actor",
        key: "id",
      },
      primaryKey: true,
    },
  },
  { sequelize, modelName: "MovieActor" }
);
