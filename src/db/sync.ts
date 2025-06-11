import "../devenv";
import { sequelize } from ".";
import {
  Auth,
  User,
  MovieSerie,
  MovieSerieGenre,
  Actor,
  MovieActor,
  MovieDirector,
  UserFavs,
  Genre,
  Director,
} from "../models";

// Sincroniza todas las tablas al mismo tiempo (elimina y recrea)
sequelize
  .sync({ force: true })
  .then((res) => {
    console.log("¡Todas las tablas han sido eliminadas y recreadas!");
  })
  .catch((err) => {
    console.error("Error al sincronizar las tablas:", err);
  });
