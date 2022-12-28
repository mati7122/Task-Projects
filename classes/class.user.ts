import UserModel from '../sequelize-models/sequelize.user';

interface UserInterface {
    name: string,
    password: string,
    photo: string,
    about: string,
    role: string
};

export class User {

    async createUser({ name, password, photo, about, role }: UserInterface) {

        const user = await UserModel.create({ name, password, photo, about, role });

        return user;

    };

    async updateUser(id: number, { name, password, photo, about, role }: UserInterface) {

        const userRowsAffected = await UserModel.update({ name, password, photo, about, role }, {
            where: { id }
        });

        const userUpdated = await UserModel.findByPk(id);

        return {
            userRowsAffected,
            userUpdated
        }

    };

    async deleteUser(id: number) {

        const userRowsAffected = await UserModel.destroy({ where: { id } });

		const userDeleted = await UserModel.findByPk(id, { paranoid: false });

		return {
			userRowsAffected,
			userDeleted
		};

    };

    async getAllUsers() {

        const users = await UserModel.findAll();

        return users;

    }

    async getUser(name: string) {

        const user = await UserModel.findOne({ where: { name } });

        return user;

    };

    async getUserById(id: number) {

        const user = await UserModel.findByPk(id);

        return user;

    }

};

