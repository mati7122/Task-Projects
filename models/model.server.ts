import hbs from 'hbs';
import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import sequelize from "../db/sequelize.instance";
import router from '../routes/route';
import routerTask from '../routes/routes.task';
import routerAdminTask from '../routes/routes.admin.task';
import routerProject from '../routes/routes.project';
import routerAdminProject from '../routes/routes.admin.project';
import connection from '../db/sequelize.instance';

export class Server {

	constructor(
		private PORT = process.env.PORT,
		private app: express.Application = express(),
		private paths = {
			api: '/api',
			user: '/user',
			task: '/task',
			project: '/project',
			adminTask: '/admin-task',
			adminProject: '/admin-project'
		}
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

		//Database synchronization
		async function databaseSynchronization(req: Request, res: Response, next: NextFunction) {

			try {

				await sequelize.sync();
				next();

			}
			catch (err) {

				console.log(err);
				return res.status(500).json({ message: 'Server error, try later' });

			}

		};

		this.app.use(this.paths.user);
		this.app.use(this.paths.task, databaseSynchronization);
		this.app.use(this.paths.project, databaseSynchronization);
		this.app.use(this.paths.adminTask, databaseSynchronization);
		this.app.use(this.paths.adminProject, databaseSynchronization);

	}

	async connectionDB() {

		try {
			await connection.authenticate();
			console.log('Connection established correctly!');
		}
		catch (err) {
			console.log(err);
		}

	}

	routes() {

		this.app.use(this.paths.api, router);
		this.app.use(this.paths.user);
		this.app.use(this.paths.task, routerTask);
		this.app.use(this.paths.project, routerProject);
		this.app.use(this.paths.adminTask, routerAdminTask);
		this.app.use(this.paths.adminProject, routerAdminProject);

	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running in PORT: ${this.PORT}`);
		})
	}
}

