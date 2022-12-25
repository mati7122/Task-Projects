import { Op } from "sequelize";
import taskModel from "../sequelize-models/sequelize.task";

interface TaskInterface {
	name: string,
	fastDescription: string,
	explicativeText: string,
	initDate: Date,
	finishDate: Date,
	relevanceLabel: string,
	belongsTo?: number,
	createdBy?: number
};

export class TaskController {

	async createTask({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy }: TaskInterface) {

		const task = await taskModel.create({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy });

		return task;

	};

	async getAllTask() {

		const allTask = await taskModel.findAll({ where: { state: true } });

		return allTask;

	};

	async getTaskById(id: number) {

		const task = await taskModel.findOne({ 

			where: { 
				[Op.and] : [ { id }, { state: true } ] 
			} 

		});

		return task;

	};

	async updateTask(id: number, { name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy }: TaskInterface) {

		const taskRowsAffected = await taskModel.update({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy }, {
			where: { id }
		}); //Here, the affected records will always be one.

		const taskUpdated = await taskModel.findByPk(id);

		return {
			taskRowsAffected,
			taskUpdated
		};

	};

	async deleteTask(id: number) {

		const taskRowsAffected = await taskModel.update({ state: false }, {
			where: { [ Op.and ] : [ { id }, { state: true } ] }
		}) //Here, the affected records will always be one.

		const taskUpdated = await taskModel.findByPk(id);

		return {
			taskRowsAffected,
			taskUpdated
		};

	};

}

