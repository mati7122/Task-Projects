import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.instance';

const Task = sequelize.define('Task', {
	name:{
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	fastDescription:{
		type: DataTypes.TEXT
	},
	text: {
		type: DataTypes.TEXT
	},
	initDate:{
		type: DataTypes.DATE
	},
	finishDate: {
		type: DataTypes.DATE
	},
	state: {
		type: DataTypes.BOOLEAN
	},
	relevance: {
		type: DataTypes.ENUM,
		validate: {
			isIn: [[ 'less importante', 'medium importance', 'very important' ]]
		}
	}
}, { timestamps: false });

export default Task;
