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
exports.TaskController = void 0;
const sequelize_task_1 = __importDefault(require("../sequelize-models/sequelize.task"));
;
class TaskController {
    constructor() {
        this.taskTable = new sequelize_task_1.default();
    }
    createTask({ taskName, fastDescription, completeDescription, initDate, finishDate, relevanceLabel }) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskTable.create({ taskName, fastDescription, completeDescription, initDate, finishDate, relevanceLabel });
            return task;
        });
    }
    getAllTask() {
        return __awaiter(this, void 0, void 0, function* () {
            const allTask = yield this.taskTable.findAll();
            return allTask;
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskTable.findByPK(id);
            return task;
        });
    }
    updateTask(id, ...rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskTable.update({ rest }, {
                where: { id }
            });
            return task;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskTable.update({ state: false }, {
                where: { id }
            });
            return task;
        });
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=model.task.controller.js.map