import sequelize from '../db/sequelize.instance';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    profilePhoto: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    }
});

// User.hasMany() //task´s
// User.hasMany() //projects´s

export default User;