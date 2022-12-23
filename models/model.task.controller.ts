import taskSequelizeInstance from "../sequelize-models/sequelize.task";

interface TaskInterface {
	taskName: string,
	fastDescription: string,
	completeDescription: string,
	initDate: Date,
	finishDate: Date,
	relevanceLabel: string
};

export class TaskController {

	private taskTable;

	constructor() {
		this.taskTable = new taskSequelizeInstance();
	}

	async createTask({ taskName, fastDescription, completeDescription, initDate, finishDate, relevanceLabel }: TaskInterface) {
		const task = await this.taskTable.create({ taskName, fastDescription, completeDescription, initDate, finishDate, relevanceLabel });
		return task;
	}

	async getAllTask() {
		const allTask = await this.taskTable.findAll();
		return allTask;
	}

	async getTaskById(id: number) {
		const task = await this.taskTable.findByPK(id);
		return task;
	}

	async updateTask(id: number, ...rest) {
		const task = await this.taskTable.update({ rest }, {
			where: { id }
		});
		return task;
	}

	async deleteTask(id: number) {
		// const task = await this.taskTable.destroy({ where: { id } });
		const task = await this.taskTable.update({ state: false }, {
			where: { id }
		})
		return task;
	}

}

