"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_instance_1 = __importDefault(require("../db/sequelize.instance"));
const Task = sequelize_instance_1.default.define('Task', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    fastDescription: {
        type: sequelize_1.DataTypes.TEXT
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
        defaultValue: true,
        allowNull: true
    },
    relevanceLabel: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['less important', 'medium important', 'very important']
    },
}, { timestamps: false });
exports.default = Task;
//# sourceMappingURL=sequelize.task.js.map