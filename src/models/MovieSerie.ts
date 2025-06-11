import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class MovieSerie extends Model {}

MovieSerie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM("movie", "serie"),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    poster_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "MovieSerie" }
);
