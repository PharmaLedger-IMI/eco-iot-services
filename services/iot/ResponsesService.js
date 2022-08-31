const DSUService = require("../DSUService");

class ResponsesService extends DSUService {

    constructor() {
        super('/responses');
    }

    mount = (keySSI, callback) => this.mountEntity(keySSI, callback)

    saveResponse(response,callback) {
        if (response.uid) {
            return this.updateEntity(response, (err, data) => {
                if (err) {
                    return callback(err);
                }
                this.getMountedSSI(data.uid, (err, test) => {
                    if (err) {
                        return callback(err);
                    }
                    const profilesReadSSI = this.getSReadSSI(test);
                    callback(undefined, profilesReadSSI);
                })

            });
        }
        this.saveEntity(response, (err, data) => {
            if (err) {
                return callback(err);
            }
            callback(undefined, data.sReadSSI);
        });
    }

    getResponses = (callback) => this.getEntities(callback);

}

module.exports = ResponsesService;