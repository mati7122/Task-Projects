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

export class Task {

	async createTask({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy }: TaskInterface) {

		const task = await taskModel.create({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy });

		return task;

	};

	async getAllTask() {

		const allTask = await taskModel.findAll();

		return allTask;

	};

	async getTaskById(id: number) {

		const task = await taskModel.findByPk(id);

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

		const taskRowsAffected = await taskModel.destroy({ where: { id } });

		const taskDeleted = await taskModel.findByPk(id, { paranoid: false });

		return {
			taskRowsAffected,
			taskDeleted
		};

	};

}
