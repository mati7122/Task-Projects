import taskModel from "../sequelize-models/sequelize.task";

export class TaskAdministrator {

    async getAllTaskAdmin() {

        const allTask = await taskModel.findAll( { paranoid: false } );
    
        return allTask;
    
    };
    
    async restoreTaskAdmin(id: number) {
    
        const task = await taskModel.findByPk(id, { paranoid: false });
    
        task?.restore();
    
        return task;
    
    };
    
    async deleteTaskAdmin(id: number){ // !! This method delete task like "delete-hard"
    
        const task = await taskModel.destroy( { where: { id }, force: true } );
    
        return task;
    
    };

}

