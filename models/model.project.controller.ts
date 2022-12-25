import { Op } from "sequelize";
import projectModel from "../sequelize-models/sequelize.task";

interface ProjectInterface {
	name: string,
	explicativeText: string,
	initDate: Date,
	finishDate: Date,
	belongsTo?: number,
	createdBy?: number
};

export class ProjectController {

	async createProject({ name, explicativeText, initDate, finishDate, belongsTo, createdBy }: ProjectInterface) {

		const project = await projectModel.create({ name, explicativeText, initDate, finishDate, belongsTo, createdBy });

		return project;

	};

	async getAllProject() {

		const allProject = await projectModel.findAll({ where: { state: true } });

		return allProject;

	};

	async getProjectById(id: number) {

		const project = await projectModel.findOne({ 

			where: { 
				[Op.and] : [ { id }, { state: true } ] 
			} 

		});

		return project;

	};

	async updateProject(id: number, { name, explicativeText, initDate, finishDate, belongsTo, createdBy }: ProjectInterface) {

		const projectRowsAffected = await projectModel.update({ name, explicativeText, initDate, finishDate, belongsTo, createdBy }, {
			where: { id }
		}); //Here, the affected records will always be one.

		const projectUpdated = await projectModel.findByPk(id);

		return {
			projectRowsAffected,
			projectUpdated
		};

	};

	async deleteProject(id: number) {

		const projectRowsAffected = await projectModel.update({ state: false }, {
			where: { [ Op.and ] : [ { id }, { state: true } ] }
		}) //Here, the affected records will always be one.

		const projectUpdated = await projectModel.findByPk(id);

		return {
			projectRowsAffected,
			projectUpdated
		};

	};

}

