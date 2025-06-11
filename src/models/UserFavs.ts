import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class UserFavs extends Model {}

UserFavs.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      primaryKey: true,
    },
    movie_serie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MovieSerie",
        key: "id",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "UserFavs",
  }
);
