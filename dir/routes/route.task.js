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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const model_task_controller_1 = require("../models/model.task.controller");
const taskController = new model_task_controller_1.TaskController();
const router = (0, express_1.Router)();
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel } = req.body;
    const data = yield taskController.createTask({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel });
    res.json({
        data
    });
}));
router.get('/get-all', (req, res) => { });
router.get('/get/:id', (req, res) => { });
router.post('/get/:id', (req, res) => { });
router.delete('/delete/:id', (req, res) => { });
exports.default = router;
//# sourceMappingURL=route.task.js.map