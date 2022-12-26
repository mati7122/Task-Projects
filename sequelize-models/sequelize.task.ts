import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.instance';
import Project from './sequelize.project';
import User from './sequelize.user';

const Task = sequelize.define('Task', {
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	fastDescription: {
		type: DataTypes.TEXT
	},
	explicativeText: {
		type: DataTypes.TEXT
	},
	initDate: {
		type: DataTypes.DATE
	},
	finishDate: {
		type: DataTypes.DATE
	},
	relevanceLabel: {
		type: DataTypes.ENUM,
		values: ['less important', 'medium important', 'very important']
	}
}, { timestamps: true, paranoid: true });

Task.belongsTo(User) //user
Task.belongsTo(Project) //project

export default Task;
