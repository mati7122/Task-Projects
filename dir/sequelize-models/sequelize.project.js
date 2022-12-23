"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_instance_1 = __importDefault(require("../db/sequelize.instance"));
const sequelize_1 = require("sequelize");
const sequelize_user_1 = __importDefault(require("./sequelize.user"));
const Project = sequelize_instance_1.default.define('Project', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    explicativeText: {
        type: sequelize_1.DataTypes.TEXT
    },
    initDate: {
        type: sequelize_1.DataTypes.DATE
    },
    finishDate: {
        type: sequelize_1.DataTypes.DATE
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdBy: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'anonymous user',
        references: {
            model: sequelize_user_1.default,
            key: 'id'
        }
    }
}, { timestamps: false });
exports.default = Project;
//# sourceMappingURL=sequelize.project.js.map