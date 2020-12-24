import SnapshotRepository from "./SnapshotRepository";

export default class Database {
    constructor(connection) {
        /** @private */
        this._connection = connection;
        this._db = connection.db("lockdown");

        /**@type {SnapshotRepository} */
        this.snapshotRepository = new SnapshotRepository(this._db);
    }

    close(){
        this._connection.close();
    }
}