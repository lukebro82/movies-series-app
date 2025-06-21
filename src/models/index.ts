import { Auth, AuthCreationAttributes } from "./Auth";
import { User, UserCreationAttributes } from "./User";
import { MovieSerie, MovieseriesCreateAttributes } from "./MovieSerie";
import { MovieSerieGenre } from "./MovieSerieGenre";
import { Actor } from "./Actor";
import { MovieActor } from "./MovieActors";
import { MovieDirector } from "./MovieDirectors";
import { UserFavs } from "./UserFavs";
import { Genre } from "./Genre";
import { Director, directorCreationAttributes } from "./Director";

// Auth hasOne User
Auth.hasOne(User, { foreignKey: "auth_id" });
User.belongsTo(Auth, { foreignKey: "auth_id" });

// User <-> MovieSerie
User.belongsToMany(MovieSerie, { through: UserFavs, foreignKey: "user_id" });
MovieSerie.belongsToMany(User, {
  through: UserFavs,
  foreignKey: "movie_serie_id",
});

// MovieSerie <-> Genre
MovieSerie.belongsToMany(Genre, {
  through: MovieSerieGenre,
  foreignKey: "movie_serie_id",
});
Genre.belongsToMany(MovieSerie, {
  through: MovieSerieGenre,
  foreignKey: "genre_id",
});

// MovieSerie <-> Actor
MovieSerie.belongsToMany(Actor, {
  through: MovieActor,
  foreignKey: "movie_id",
});
Actor.belongsToMany(MovieSerie, {
  through: MovieActor,
  foreignKey: "actor_id",
});

// MovieSerie <-> Director
MovieSerie.belongsToMany(Director, {
  through: MovieDirector,
  foreignKey: "movie_id",
});
Director.belongsToMany(MovieSerie, {
  through: MovieDirector,
  foreignKey: "director_id",
});

export {
  Auth,
  AuthCreationAttributes,
  User,
  UserCreationAttributes,
  MovieSerie,
  MovieseriesCreateAttributes,
  MovieSerieGenre,
  Actor,
  MovieActor,
  MovieDirector,
  UserFavs,
  Genre,
  Director,
  directorCreationAttributes,
};
