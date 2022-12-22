import { DataTypes } from 'sequelize';

const Task = sequelize.define('Task', {
	name:{
		type: DataTypes.VARCHAR(50),
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
	}
}, { timestamps: false });

export default Task;
