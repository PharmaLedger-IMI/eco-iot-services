const DSUService = require("../DSUService");

class HealthDataService extends DSUService {

    constructor() {
        super('/health-data');
    }

    mountObservation = (keySSI, callback) => this.mountEntity(keySSI, callback);

    getAllObservations = (callback) => this.getEntities(callback);

    saveObservation = (data, callback) => this.saveEntity(data, callback);

}

module.exports = HealthDataService;