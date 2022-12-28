import projectModel from "../sequelize-models/sequelize.project";

interface ProjectInterface {
	name: string,
	explicativeText: string,
	initDate: Date,
	finishDate: Date
};

export class Project {

	async createProject(UserId: number, { name, explicativeText, initDate, finishDate }: ProjectInterface) {

		const project = await projectModel.create({ name, explicativeText, initDate, finishDate, UserId });

		return project;

	};

	async getAllProject() {

		const allProject = await projectModel.findAll();

		return allProject;

	};

	async getProjectById(id: number) {

		const project = await projectModel.findByPk(id);

		return project;

	};

	async updateProject(id: number, { name, explicativeText, initDate, finishDate }: ProjectInterface) {

		const projectRowsAffected = await projectModel.update({ name, explicativeText, initDate, finishDate }, {
			where: { id }
		}); //Here, the affected records will always be one.

		const projectUpdated = await projectModel.findByPk(id);

		return {
			projectRowsAffected,
			projectUpdated
		};

	};

	async deleteProject(id: number) {

		const projectRowsAffected = await projectModel.destroy({ where: { id } });

		const projectUpdated = await projectModel.findByPk(id, { paranoid: false });

		return {
			projectRowsAffected,
			projectUpdated
		};

	};

};

