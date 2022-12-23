import { Sequelize } from 'sequelize';
import { strict as assert } from 'assert';
import { load } from 'ts-dotenv';

const env = load({
	DB_NAME: String,
	DB_USER: String,
	DB_PASSWORD: String
});

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
	host: 'localhost',
	dialect: 'mysql'
});

export default sequelize;