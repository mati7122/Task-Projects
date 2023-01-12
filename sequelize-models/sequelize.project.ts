import sequelize from "../db/sequelize.instance";
import { DataTypes } from "sequelize";

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

export default Project;
