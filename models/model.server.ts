import express from 'express';
import { Sequelize } from 'sequelize';
import connection from '../db/sequelize.instance';

export class Server{
	constructor(
		private PORT = process.env.PORT,
		private app: express.Application = express()
	){
		this.connectionDB();
	}

	async connectionDB(){
		try{
			await connection.authenticate()
			console.log('Connection established correctly');
		}
		catch(err){
			console.log(err);
		}
	}

	manageDB(){}

	routes(){
		this.app.get('/', (req, res) => {
			res.json({
				msg: 'Succes!'
			})
		});
	}

	listen(){
		this.app.listen(this.PORT, () => {
			console.log(`Server running in PORT: ${this.PORT}`);
		})
	}
}

