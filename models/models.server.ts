import express from 'express';
import { Sequelize } from 'sequelize';

export class Server{
	constructor(
		private PORT: number = process.env.PORT; 
		private app: express.Application = express();
		private sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' });
	){}

	manageDB(){}

	listen(){
		this.app.listen(this.PORT, () => {
			console.log(`Server running in PORT: ${this.PORT}`);
		})
	}
}

