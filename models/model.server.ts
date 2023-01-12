import express, { NextFunction, Request, Response } from 'express';
import sequelize from "../db/sequelize.instance";
import router from '../routes/route';
import routerTask from '../routes/routes.task';
import routerAdminTask from '../routes/routes.admin.task';
import routerProject from '../routes/routes.project';
import routerAdminProject from '../routes/routes.admin.project';
import routerUser from '../routes/routes.user';
import connection from '../db/sequelize.instance';
import { validateJWT } from '../middlewares/validate.jwt';
import { validateRole } from '../middlewares/validate.role';

export class Server {

	constructor(
		private PORT = process.env.PORT,
		private app: express.Application = express(),
		private paths = {
			doc: '/docs',
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

		//Body parser
		this.app.use(express.json());

		//Public
		this.app.use(express.static('public'));

		//Database synchronization
		async function databaseSynchronization(req: Request, res: Response, next: NextFunction) {

			try {

				await sequelize.sync({ alter: true });
				next();

			}
			catch (err) {

				console.log(err);
				return res.status(500).json({ message: 'Server error, try later' });

			}

		};

		this.app.use(this.paths.user, databaseSynchronization);
		this.app.use(this.paths.task, databaseSynchronization, validateJWT);
		this.app.use(this.paths.project, databaseSynchronization, validateJWT);
		this.app.use(this.paths.adminTask, databaseSynchronization, validateJWT, validateRole);
		this.app.use(this.paths.adminProject, databaseSynchronization, validateJWT, validateRole);

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

		this.app.use(this.paths.doc, router);
		this.app.use(this.paths.user, routerUser);
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

