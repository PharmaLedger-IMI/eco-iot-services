const {getCommunicationServiceInstance} = require("./CommunicationService");

class MessageHandlerService {

    constructor(newMessageHandler) {
        this.communicationService = getCommunicationServiceInstance();
        this.communicationService.listenForMessages(newMessageHandler);
    }

}

let instance = null;
const init = (newMessageHandler) => {
    if (instance === null) {
        instance = new MessageHandlerService(newMessageHandler);
    }
    return instance;
};


module.exports = {init};