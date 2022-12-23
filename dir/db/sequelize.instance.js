"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const ts_dotenv_1 = require("ts-dotenv");
const env = (0, ts_dotenv_1.load)({
    DB_NAME: String,
    DB_USER: String,
    DB_PASSWORD: String
});
const sequelize = new sequelize_1.Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.instance.js.map