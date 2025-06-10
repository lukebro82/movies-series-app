import "../devenv";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.NEONKEY || "");

async function sequelizeSync() {
  await sequelize.sync();
}

sequelizeSync();
