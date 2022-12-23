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
	state: { //Indica en que estado se encuentra la tarea { 'active': 1, 'deleted': 0 }
		type: DataTypes.BOOLEAN,
		defaultValue: true
	},
	relevance: {
		type: DataTypes.ENUM,
		validate: {
			isIn: [['less importante', 'medium importance', 'very important']]
		}
	},
	belongsToProject: {
		type: DataTypes.NUMBER,
		defaultValue: 'single task',
		references: {
			model: Project,
			key: 'id'
		}
	},
	createdBy: {
		type: DataTypes.STRING,
		defaultValue: 'anonymous user',
		references: {
			model: User,
			key: 'id'
		}
	}
}, { timestamps: false });

// Task.belongsTo() //user
// Task.belongsTo() //project

export default Task;
