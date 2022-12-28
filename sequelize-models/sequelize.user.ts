import sequelize from '../db/sequelize.instance';
import { DataTypes } from 'sequelize';
import Task from './sequelize.task';
import Project from './sequelize.project';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    profilePhoto: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'no_image'
    },
    about: {
        type: DataTypes.TEXT
    },
    role: {
        type: DataTypes.ENUM,
        values: [ 'ADMIN_ROLE', 'USER_ROLE' ],
        defaultValue: 'USER_ROLE'
    }
}, { timestamps: true, paranoid: true });

User.hasMany(Task); 
Task.belongsTo(User);

User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(Task);
Task.belongsTo(Project);

export default User;