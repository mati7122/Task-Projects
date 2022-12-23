"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const hbs_1 = __importDefault(require("hbs"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes/routes"));
const sequelize_instance_1 = __importDefault(require("../db/sequelize.instance"));
class Server {
    constructor(PORT = process.env.PORT, app = (0, express_1.default)()) {
        this.PORT = PORT;
        this.app = app;
        this.connectionDB();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.set('view engine', 'hbs');
        hbs_1.default.registerPartials(__dirname + '/views/partials');
    }
    connectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield sequelize_instance_1.default.authenticate();
                console.log('Connection established correctly');
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    manageDB() { }
    routes() {
        this.app.use('/api', routes_1.default);
    }
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running in PORT: ${this.PORT}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=model.server.js.map