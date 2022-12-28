import sequelize from "../db/sequelize.instance";
import { DataTypes } from "sequelize";
import Task from "./sequelize.task";

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

// Project.hasMany(Task) 
// Task.belongsTo(Project);

export default Project;
