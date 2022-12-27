import ProjectModel from "../sequelize-models/sequelize.project";

export class ProjectAdministrator {

    async getAllProjectAdmin() {

        const allProject = await ProjectModel.findAll( { paranoid: false } );
    
        return allProject;
    
    };
    
    async restoreProjectAdmin(id: number) {
    
        const project = await ProjectModel.findByPk(id, { paranoid: false });
    
        project?.restore();
    
        return project;
    
    };
    
    async deleteProjectAdmin(id: number){ // !! This method delete project like "delete-hard"
    
        const project = await ProjectModel.destroy( { where: { id }, force: true } );
    
        return project;
    
    };

}
