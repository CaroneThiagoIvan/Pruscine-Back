// Importar los modelos
import { Pelicula } from './Pelicula';
import { Genero } from './Genero';
import { Actor } from './Actor';
import { Director } from './Director';
import { User } from './User';
import { Resena } from './Resena';



// Relación Pelicula y Genero (N:N)
Pelicula.belongsToMany(Genero, { through: 'peliculaGenero', foreignKey: 'pelicula_idpelicula' });
Genero.belongsToMany(Pelicula, { through: 'peliculaGenero', foreignKey: 'genero_idgenero' });

// Relación Actor y Pelicula (N:N)
Pelicula.belongsToMany(Actor, { through: 'peliculaActor', foreignKey: 'pelicula_idpelicula' });
Actor.belongsToMany(Pelicula, { through: 'peliculaActor', foreignKey: 'actor_idactor' });

// Relación Director y Pelicula (N:N)
Pelicula.belongsToMany(Director, { through: 'peliculaDirector', foreignKey: 'pelicula_idpelicula' });
Director.belongsToMany(Pelicula, { through: 'peliculaDirector', foreignKey: 'director_iddirector' });

// Relación User y Pelicula (N:N) para favoritos
Pelicula.belongsToMany(User, { through: 'favoritoP', foreignKey: 'pelicula_idpelicula' });
User.belongsToMany(Pelicula, { through: 'favoritoP', foreignKey: 'user_iduser' });

// Relación User y Pelicula (N:N) para lista
Pelicula.belongsToMany(User, { through: 'lista', foreignKey: 'pelicula_idpelicula' });
User.belongsToMany(Pelicula, { through: 'lista', foreignKey: 'user_iduser' });

// Relación User y Pelicula (N:N) para reseñas
Pelicula.belongsToMany(User, { through: 'resena', foreignKey: 'pelicula_idpelicula' });
User.belongsToMany(Pelicula, { through: 'resena', foreignKey: 'user_iduser' });

// Relación Resena y User (N:N) para favoritos de reseñas
Resena.belongsToMany(User, { through: 'favoritoR', foreignKey: 'resena_idresena' });
User.belongsToMany(Resena, { through: 'favoritoR', foreignKey: 'user_iduser' });
