import Database from './Database';

require('dotenv').config();

// if (!process.env.MONGO_DB_USER || !process.env.MONGO_DB_PASSWORD || !process.env.MONGO_DB){
//     throw "Please set MONGO_DB_USER and MONGO_DB_PASSWORD and MONGO_DB in env.variables";
// }

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB}:${process.env.MONGO_PORT}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${process.env.MONGO_DB_USER}@`;
const client = new MongoClient(uri, { useNewUrlParser: true });

/**
 * @returns {Database}
 */
export async function connect() {
    let connection = await client.connect();
    return new Database(connection);
}

