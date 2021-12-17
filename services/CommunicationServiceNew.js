const opendsu = require("opendsu");
const w3cDID = opendsu.loadAPI('w3cdid');
const scAPI = opendsu.loadAPI("sc");

const messageQueueServiceInstance = require("./MessageQueueService");

class CommunicationServiceNew {

    /**
     * @param didType : String - the type of the did (did:name, did:group...)
     * @param publicName : String - the public name used by the sender to send a message
     */
    constructor({didType, publicName}) {
        this.didType = didType;
        this.domain = "default";
        this.publicName = publicName;

        const sc = scAPI.getSecurityContext();
        sc.on("initialised", async () => {
            await this.createIdentity();
        });
    }

    async createIdentity() {
        try {
            this.didDocument = await $$.promisify(w3cDID.createIdentity)(this.didType, this.domain, this.publicName);
            console.log(`Identity ${this.didDocument.getIdentifier()} created successfully.`);
        } catch (e) {
            console.log("[ERROR]");
            console.error(e);
        }
    }

    async sendMessage(data, receiver) {
        if (!this.didDocument) {
            return this.sleep(async () => {
                await this.sendMessage(data, receiver);
            });
        }

        const {didType, publicName} = receiver;
        const identifier = `did:${didType}:${this.domain}:${publicName}`;
        try {
            const receiverDidDocument = await $$.promisify(w3cDID.resolveDID)(identifier);
            const sc = scAPI.getSecurityContext();
            sc.on("initialised", async () => {
                this.didDocument.sendMessage(JSON.stringify(data), receiverDidDocument, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            });
        } catch (e) {
            console.log("[ERROR]");
            console.error(e);
        }
    }

    listenForMessages(callback) {
        if (!this.didDocument) {
            return this.sleep(() => {
                this.listenForMessages(callback);
            });
        }

        this.didDocument.readMessage((err, decryptedMessage) => {
            if (err) {
                console.log("[ERROR]");
                console.error(err)
            }
            console.log("[Received Message]", decryptedMessage);
            messageQueueServiceInstance.addCallback(async () => {
                await callback(err, decryptedMessage);
            });

            this.listenForMessages(callback);
        });
    }

    sleep(callback) {
        const time = 500;
        setTimeout(() => {
            callback();
        }, time);
    }
}

let instance = null;
const getCommunicationServiceInstance = (didData) => {
    if (instance === null) {
        instance = new CommunicationServiceNew(didData);
    }

    return instance;
};

module.exports = {
    getCommunicationServiceInstance
};