import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.instance';

const Task = sequelize.define('Task', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
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

export default Task;
