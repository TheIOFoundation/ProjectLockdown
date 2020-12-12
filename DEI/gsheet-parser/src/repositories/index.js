import Database from './Database';

require('dotenv').config();

// if (!process.env.MONGO_DB_USER || !process.env.MONGO_DB_PASSWORD || !process.env.MONGO_DB){
//     throw "Please set MONGO_DB_USER and MONGO_DB_PASSWORD and MONGO_DB in env.variables";
// }

const MongoClient = require('mongodb').MongoClient;
//const uri = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB}:${process.env.MONGO_PORT}`;
const uri = `mongodb://the-io-foundation:kzxaxGq5wf08m6bCYwLgZMMQZRWnUhoA8AUmkOHZNc4p9iGfqGjOIAAQb5OsppZJ5DteG1RlEvuHEeVHEJcgVg==@the-io-foundation.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@the-io-foundation@`;
//const uri = `mongodb://${process.env.MONGO_DB}`;
const client = new MongoClient(uri, { useNewUrlParser: true });

/**
 * @returns {Database}
 */
export async function connect() {
    let connection = await client.connect();
    return new Database(connection);
}

