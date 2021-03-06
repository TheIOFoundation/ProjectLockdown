import SnapshotRepository from "./SnapshotRepository";
import EnvironmentRepository from "./EnvironmentRepository";
import TerritoryRepository from "./TerritoryRepository";

export default class Database {
    constructor(connection) {
        /** @private */
        this._connection = connection;
        this._db = connection.db("project-lockdown");

        /**@type {SnapshotRepository} */
        this.snapshotRepository = new SnapshotRepository(this._db);

        /**@type {EnvironmentRepository} */
        this.environmentRepository = new EnvironmentRepository(this._db);

        /**@type {TerritoryRepository} */
        this.territoryRepository = new TerritoryRepository(this._db);
    }

    close(){
        this._connection.close();
    }
}