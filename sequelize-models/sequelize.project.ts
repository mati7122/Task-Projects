import sequelize from "../db/sequelize.instance";
import { DataTypes } from "sequelize";
import Task from "./sequelize.task";
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
    }
}, { timestamps: true, paranoid: true });

Project.belongsTo(User) //user
Project.hasMany(Task) //task´s

export default Project;
