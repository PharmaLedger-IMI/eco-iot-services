const {getCommunicationServiceInstance} = require("./CommunicationService");

class MessageHandlerService {

    constructor(newMessageHandler) {
        this.newMessageHandler = newMessageHandler;
        this.communicationService = getCommunicationServiceInstance();
        this.communicationService.listenForMessages(this.mqListenerHandler);
    }

    mqListenerHandler = (err, message) => {
        if (err) {
            if (err.originalMessage === "socket hang up") {
                console.log("Reloading after " + err.originalMessage);
                return this.communicationService.listenForMessages(this.mqListenerHandler);
            }

            // TODO: Check for other types of errors that should be handled and to restart the listener
            return console.error(err);
        }

        this.newMessageHandler(message);
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