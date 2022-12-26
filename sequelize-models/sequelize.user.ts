import sequelize from '../db/sequelize.instance';
import { DataTypes } from 'sequelize';
import Task from './sequelize.task';
import Project from './sequelize.project';

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
    userAbout: {
        type: DataTypes.TEXT
    },
    role: {
        type: DataTypes.ENUM,
        values: [ 'ADMIN_ROLE', 'USER_ROLE' ],
        defaultValue: 'USER'
    }
}, { timestamps: true, paranoid: true });

User.hasMany(Task) //task´s
User.hasMany(Project) //projects´s

export default User;