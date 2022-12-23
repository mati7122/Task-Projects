import projectSequelizeInstance from '../sequelize-models/sequelize.project';

interface ProjectInterface {
    projectName: string,
    explicativeText: string,
    initDate: Date,
    finishDate: Date,
    createdBy: number
};

export class ProjectController {

    private projectTable;

    constructor() {
        this.projectTable = new projectSequelizeInstance();
    }

    async createProject({ projectName, explicativeText, initDate, finishDate, createdBy }: ProjectInterface) {
        const project = await this.projectTable.create({
            projectName,
            explicativeText,
            initDate,
            finishDate,
            createdBy
        });
        return project;
    }

    async getAllProjects() {
        const Allproject = await this.projectTable.findAll();
        return Allproject;
    }

    async getProjectById(id: number) {
        const project = await this.projectTable.findByPK(id);
        return project;
    }

    async updateProject(id: number, ...rest) {
        const project = await this.projectTable.update({ rest }, {
            where: { id }
        });
        return project;
    }

    async deleteProject(id: number, ...rest) {
        const project = await this.projectTable.update({ state: false }, {
            where: { id }
        });
        return project;
    }

}