"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_instance_1 = __importDefault(require("../db/sequelize.instance"));
const sequelize_project_1 = __importDefault(require("./sequelize.project"));
const sequelize_user_1 = __importDefault(require("./sequelize.user"));
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
        defaultValue: true
    },
    relevance: {
        type: sequelize_1.DataTypes.ENUM,
        validate: {
            isIn: [['less importante', 'medium importance', 'very important']]
        }
    },
    belongsToProject: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 'single task',
        references: {
            model: sequelize_project_1.default,
            key: 'id'
        }
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
exports.default = Task;
//# sourceMappingURL=sequelize.task.js.map