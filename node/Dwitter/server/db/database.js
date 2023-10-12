import { config } from '../config.js';
import SQ from 'sequelize';
import MongoDb from 'mongodb';


export const connectDB = async () => {
  return MongoDb.MongoClient.connect(config.db.host)
    .then(client => client.db());
} 

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: false,
});