import { Server } from './models/model.server';
import dotenv from 'dotenv';
dotenv.config();

const app = new Server();
app.listen();

