import hbs from 'hbs';
import express from 'express';
import router from '../routes/route';
import routerTask from '../routes/route.task';
// import routerProject from '../routes/routes.project';
import connection from '../db/sequelize.instance';

export class Server {
	constructor(
		private PORT = process.env.PORT,
		private app: express.Application = express()
	) {
		this.connectionDB();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		//Handlebars
		this.app.set('view engine', 'hbs');
		hbs.registerPartials(__dirname + '/views/partials');
		//Body parser
		this.app.use(express.json());
	}

	async connectionDB() {
		try {
			await connection.authenticate()
			console.log('Connection established correctly!');
		}
		catch (err) {
			console.log(err);
		}
	}

	manageDB() { }

	routes() {
		this.app.use('/api', router);
		this.app.use('/task', routerTask);
		// this.app.use('/project', routerProject);
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running in PORT: ${this.PORT}`);
		})
	}
}

