import sequelize from "sequelize";
import taskSequelizeInstance from "../sequelize-models/sequelize.task";

interface TaskInterface{
	taskName: string,
	fastDescription: string,
	completeDescription: string,
	initDate: Date,
	finishDate: Date,
	state: boolean,
	relevanceLabel: string
}

export class taskController{

	private taskTable: sequelize.Model;

	constructor(){
		this.taskTable = new taskSequelizeInstance()
	}

	async createTask({ taskName, fastDescription, completeDescription, initDate, finishDate, state, relevanceLabel }: TaskInterface){
		const task = await this.taskTable.create({ taskName, fastDescription, completeDescription, initDate, finishDate, state, relevanceLabel });
		return task;
	}

	async getAllTask(){
		const allTask = await this.taskTable.findAll();
		return allTask;
	}

	async getTaskById(id: number){
		const task = await this.taskTable.findById(id);
		return task;
	}

	async updateTask(id: number, ...rest: TaskInterface[]){
		const task = await this.taskTable.update({ rest }, {
			where: { id }
		});
		return task;
	}

	async deleteTask(id: number){
		const task = await this.taskTable.destroy({ where: { id } });
		return task;
	}

}

