"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_instance_1 = __importDefault(require("../db/sequelize.instance"));
const sequelize_1 = require("sequelize");
const User = sequelize_instance_1.default.define('User', {
    userName: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    profilePhoto: {
        type: sequelize_1.DataTypes.TEXT
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    }
});
exports.default = User;
//# sourceMappingURL=sequelize.user.js.map