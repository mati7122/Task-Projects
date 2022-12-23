import sequelize from "../db/sequelize.instance";
import { DataTypes } from "sequelize";
import User from "./sequelize.user";

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING
    },
    explicativeText: {
        type: DataTypes.TEXT
    },
    initDate: {
        type: DataTypes.DATE
    },
    finishDate: {
        type: DataTypes.DATE
    },
    state: { //Indica en que estado se encuentra el proyecto { 'active': 1, 'deleted': 0 }
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdBy: {
        type: DataTypes.STRING,
        defaultValue: 'anonymous user',
        references: {
            model: User,
            key: 'id'
        }
    }

}, { timestamps: false });

// Project.belongsTo() //user
// Project.hasMany() //task´s

export default Project;
