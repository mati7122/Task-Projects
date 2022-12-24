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
		// await sequelize.sync();
		const task = await taskModel.create({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy });
		return task;
	}

	async getAllTask() {
		const allTask = await taskModel.findAll();
		return allTask;
	}

	async getTaskById(id: number) {
		const task = await taskModel.findByPk(id);
		return task;
	}

	async updateTask(id: number, { name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy }: TaskInterface) {
		const task = await taskModel.update({ name, fastDescription, explicativeText, initDate, finishDate, relevanceLabel, belongsTo, createdBy }, {
			where: { id }
		});
		return task;
	}

	async deleteTask(id: number) {
		const task = await taskModel.update({ state: false }, {
			where: { id }
		})
		return task;
	}

}

