import { config } from '../config.js';
import SQ from 'sequelize';
import MongoDb from 'mongodb';


let db;
export const connectDB = async () => {
  return MongoDb.MongoClient.connect(config.db.host)
    .then(client => {
      db = client.db();
    });
}

export const getUsers = () => {
  return db.collection('users');
};

export const getTweets = () => {
  return db.collection('tweets');
};

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: false,
});