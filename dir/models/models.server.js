"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
class Server {
    constructor(PORT = process.env.PORT | 3000, app = (0, express_1.default)(), sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' })) {
        this.PORT = PORT;
        this.app = app;
        this.sequelize = sequelize;
    }
    connectDB() {
        try {
            this.sequelize.authenticate();
        }
        catch (err) {
            console.log('An error has ocurred when was try connect to database');
            console.log(err);
        }
    }
    manageDB() { }
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running in PORT: ${this.PORT}`);
        });
    }
}
exports.Server = Server;
