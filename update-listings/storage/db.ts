import { MongoClient, Db } from 'mongodb';
import config from '../config/config';

const { connectionString, id: dbId } = config.db;
let mongoClient: MongoClient = null;
let db: Db = null;

export const init = async () => {
  mongoClient = new MongoClient(connectionString);
  await mongoClient.connect();
  db = await mongoClient.db(dbId);
};

export const close = () => mongoClient.close();

export const getAllItems = (containerId: string) => db.collection(containerId).find().toArray();
