const DSUService = require("../DSUService");

class QuestionnaireService extends DSUService {

    constructor() {
        super('/questionnaires');
    }

    mount = (keySSI, callback) => this.mountEntity(keySSI, callback);

    getAllQuestionnaires = (callback) => this.getEntities(callback);

    getQuestionnaire = (uid, callback) => this.getEntity(uid, callback);

    saveQuestionnaire = (data, callback) => this.saveEntity(data, callback);

    updateQuestionnaire = (data, callback) => this.updateEntity(data, callback);

}

module.exports = QuestionnaireService;