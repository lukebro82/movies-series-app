import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class Director extends Model {}

Director.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Director" }
);

export interface directorCreationAttributes {
  name: string;
  birth_date: Date;
  bio: string;
  photo_url: string;
}
