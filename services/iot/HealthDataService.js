const DSUService = require("../DSUService");

class HealthDataService extends DSUService {

    constructor() {
        super('/health-data');
    }

    mountObservation = (keySSI, callback) => this.mountEntity(keySSI, callback);

    getAllObservations = (callback) => this.getEntities(callback);

    getObservation = (uid, callback) => this.getEntity(uid, callback);

    saveObservation = (data, callback) => {
        const observations = {
            observations: data
        }
        this.saveEntity(observations, callback);
    }

    getSReadSSI = (pathPrefix, callback) => this.getEntityMountSSI(pathPrefix, callback);

}

module.exports = HealthDataService;