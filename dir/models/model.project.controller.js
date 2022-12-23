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
exports.ProjectController = void 0;
const sequelize_project_1 = __importDefault(require("../sequelize-models/sequelize.project"));
;
class ProjectController {
    constructor() {
        this.projectTable = new sequelize_project_1.default();
    }
    createProject({ projectName, explicativeText, initDate, finishDate, createdBy }) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectTable.create({
                projectName,
                explicativeText,
                initDate,
                finishDate,
                createdBy
            });
            return project;
        });
    }
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const Allproject = yield this.projectTable.findAll();
            return Allproject;
        });
    }
    getProjectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectTable.findByPK(id);
            return project;
        });
    }
    updateProject(id, ...rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectTable.update({ rest }, {
                where: { id }
            });
            return project;
        });
    }
    deleteProject(id, ...rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectTable.update({ state: false }, {
                where: { id }
            });
            return project;
        });
    }
}
exports.ProjectController = ProjectController;
//# sourceMappingURL=model.project.controller.js.map