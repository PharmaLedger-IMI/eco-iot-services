const DSUService = require("../DSUService");

class ResponsesService extends DSUService {

    constructor() {
        super('/responses');
    }

    mount = (keySSI, callback) => this.mountEntity(keySSI, callback)

    saveResponse = (response, callback) => this.saveEntity(response, callback)

    getResponses = (callback) => this.getEntities(callback);

}

module.exports = ResponsesService;
