import express from 'express';
import { Sequelize } from 'sequelize';

export class Server{
	constructor(
		private PORT: any = process.env.PORT | 3000,
		private app: express.Application = express(),
		private sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' })
	){}

	connectDB(){
		try{
			this.sequelize.authenticate();
		}
		catch(err){
			console.log('An error has ocurred when was try connect to database');
			console.log(err);
		}
	}

	manageDB(){}

	listen(){
		this.app.listen(this.PORT, () => {
			console.log(`Server running in PORT: ${this.PORT}`);
		})
	}
}

