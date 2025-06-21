import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auth_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Auths",
        key: "id",
      },
    },
    name: { type: DataTypes.STRING, allowNull: false },
    avatar_url: { type: DataTypes.STRING, allowNull: true },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

export interface UserCreationAttributes {
  auth_id: any;
  name: string;
  avatar_url: string;
}
