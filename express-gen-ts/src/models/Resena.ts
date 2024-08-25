import moment from 'moment';
import { sequelize } from "../database";
import { DataTypes } from 'sequelize';
import { table } from 'console';
import { Pelicula } from './Pelicula';
import { User } from './User';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IResena {
  usuario_idusuario: number;
  pelicula_idpelicula: number;
}

export const Resena = sequelize.define('resena', {
  usuario_idusuario: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'idusuario'
    }
  },
  pelicula_idpelicula: {
    type: DataTypes.INTEGER,
    references: {
        model: Pelicula,
        key: 'idpelicula'
    }
  }
}, {
  timestamps: false,
  tableName: 'resena'
});
