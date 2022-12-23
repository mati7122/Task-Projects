"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_server_1 = require("./models/model.server");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = new model_server_1.Server();
app.listen();
//# sourceMappingURL=app.js.map