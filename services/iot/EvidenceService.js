const DSUService = require("../DSUService");

class EvidenceService extends DSUService {

    constructor() {
        super('/evidence');
    }

    mount = (keySSI, callback) => this.mountEntity(keySSI, callback);

    getEvidences = (callback) => this.getEntities(callback);

    getEvidence = (uid, callback) => this.getEntity(uid, callback);

    saveEvidence = (data, callback) => this.saveEntity(data, callback);

    updateEvidence = (data, callback) => this.updateEntity(data, callback);

    addEvidenceFile(file, evidenceUid) {
        return this.uploadFile("evidence" + '/' + evidenceUid + '/' + 'files' + '/' + file.name, file.file);
    }

    uploadFile(path, file) {
        function getFileContentAsBuffer(file, callback) {
            let fileReader = new FileReader();
            fileReader.onload = function (evt) {
                let arrayBuffer = fileReader.result;
                callback(undefined, arrayBuffer);
            };

            fileReader.readAsArrayBuffer(file);
        }

        return new Promise((resolve, reject) => {
            getFileContentAsBuffer(file, (err, arrayBuffer) => {
                if (err) {
                    return reject('Could not get file as a Buffer');
                }
                this.DSUStorage.writeFile(path, $$.Buffer.from(arrayBuffer), undefined, (err, keySSI) => {
                    if (err) {
                        return reject(new Error(err));
                    }
                    resolve();
                });
            });
        });
    }

}

module.exports = EvidenceService;