const opendsu = require("opendsu");
const storage = opendsu.loadApi('storage')
const resolver = opendsu.loadAPI('resolver');
const keySSISpace = opendsu.loadAPI('keyssi');
class DSUService {

    PATH = "/";

    constructor(path = this.PATH) {
        this.DSUStorage = storage.getDSUStorage();
        this.PATH = path;
    }

    letDSUStorageInit = () => {
        if (typeof this.initializationPromise === 'undefined') {
            this.initializationPromise = new Promise((resolve) => {
                if (this.DSUStorage === undefined || this.DSUStorage.directAccessEnabled === true) {
                    return resolve();
                }
                this.DSUStorage.enableDirectAccess(() => {
                    resolve();
                })
            });
        }
        return this.initializationPromise;
    }

    getEntities(path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        const resolver = opendsu.loadAPI('resolver');
        this.letDSUStorageInit().then(() => {
            this.DSUStorage.listMountedDSUs(path, (err, dsuList) => {
                if (err) {
                    return callback(err, undefined);
                }
                let entities = [];
                let getServiceDsu = (dsuItem) => {
                    let objectName = this.PATH.substring(1);
                    let itemPathSplit = dsuItem.path.split('/')
                    if (itemPathSplit.length > 1) {
                        objectName = itemPathSplit[0];
                    }
                    resolver.loadDSU(dsuItem.identifier, (err, dsu) => {
                        if (err) {
                            return callback(err);
                        }
                        dsu.readFile('/data.json', (err, content) => {
                            if (err) {
                                entities.slice(0);
                                return callback(err, undefined);
                            }
                            let entity = JSON.parse(content.toString());
                            entity.objectName = objectName;
                            entities.push(entity);

                            if (dsuList.length === 0) {
                                return callback(undefined, entities);
                            }
                            getServiceDsu(dsuList.shift());
                        });
                    });
                };
                if (dsuList.length === 0) {
                    return callback(undefined, []);
                }
                getServiceDsu(dsuList.shift());
            })
        });
    }

    async getEntitiesAsync(path) {
        return this.asyncMyFunction(this.getEntities, [...arguments])
    }

    getEntity(uid, path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        this.DSUStorage.getItem(this._getDsuStoragePath(uid, path), (err, content) => {
            if (err) {
                return callback(err, undefined);
            }
            let textDecoder = new TextDecoder('utf-8');
            callback(undefined, JSON.parse(textDecoder.decode(content)));
        });
    }

    async getEntityAsync(uid, path) {
        return this.asyncMyFunction(this.getEntity, [...arguments])
    }

    createDSUAndMount(path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        const resolver = opendsu.loadAPI('resolver');
        const keySSISpace = opendsu.loadAPI('keyssi');
        const config = opendsu.loadAPI("config");

        config.getEnv("domain", (err, domain) => {
            if(err || !domain){
                domain = "default";
            }
            const templateSSI = keySSISpace.createTemplateSeedSSI(domain);
            resolver.createDSU(templateSSI, (err, dsuInstance) => {
                if (err) {
                    return callback(err);
                }
                dsuInstance.getKeySSIAsString((err, keySSI) => {
                    if (err) {
                        return callback(err);
                    }
                    this.letDSUStorageInit().then(() => {
                        this.DSUStorage.mount(path + '/' + keySSI, keySSI, (err) => {
                            callback(err, keySSI);
                        });
                    });
                });
            });
        });
    }

    saveEntity(entity, path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);

        const config = opendsu.loadAPI('config');

        config.getEnv('domain', (err, domain) => {
            if (err || !domain) {
                domain = 'default';
            }

            const templateSSI = keySSISpace.createTemplateSeedSSI(domain);
            resolver.createDSU(templateSSI, (err, dsuInstance) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                }


                dsuInstance.getKeySSIAsString((err, seedSSI) => {
                    if (err) {
                        return callback(err);
                    }

                    const keySSIObj = keySSISpace.parse(seedSSI);
                    const anchorId = keySSIObj.getAnchorId();

                    dsuInstance.getKeySSIAsString('sread', (err, sreadSSI) => {
                        if (err) {
                            return callback(err);
                        }
                        this.letDSUStorageInit().then(() => {
                            this.DSUStorage.mount(path + '/' + anchorId, seedSSI, (err) => {
                                if (err) {
                                    console.log(err);
                                }
                                entity.uid = anchorId;

                                this.updateEntity(entity, path, (err, entity) => {
                                    if (err) {
                                        return callback(err, entity);
                                    }

                                    entity.keySSI = seedSSI;
                                    entity.sReadSSI = sreadSSI;
                                    callback(undefined, entity);
                                });

                            });
                        })
                    });
                });
            });

        });
    }

    async saveEntityAsync(entity, path) {
        return this.asyncMyFunction(this.saveEntity, [...arguments])
    }


    updateEntity(entity, path, callback) {
        entity.volatile = undefined;
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        this.DSUStorage.setObject(this._getDsuStoragePath(entity.uid, path), entity, (err) => {
            if (err) {
                return callback(err, undefined);
            }
            callback(undefined, entity);
        });
    }



    async updateEntityAsync(entity, path) {
        return this.asyncMyFunction(this.updateEntity, [...arguments])
    }

    mountEntity(keySSI, path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);

        const keySSIObj = keySSISpace.parse(keySSI);
        const anchorId = keySSIObj.getAnchorId();
        this.letDSUStorageInit().then(() => {
            this.DSUStorage.mount(path + '/' + anchorId, keySSI, (err) => {
                this.getEntity(anchorId, path, (err, entity) => {
                    if (err) {
                        return callback(err, undefined);
                    }
                    callback(undefined, entity);
                });
            });
        })
    }

    async mountEntityAsync(keySSI, path) {
        return this.asyncMyFunction(this.mountEntity, [...arguments])
    }

    unmountEntity(uid, path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        let unmountPath = path + '/' + uid;
        this.letDSUStorageInit().then(() => {
            this.DSUStorage.unmount(unmountPath, (err, result) => {
                if (err) {
                    return callback(err, undefined);
                }
                callback(undefined, result);
            });
        });
    }

    async unmountEntityAsync(uid, path) {
        return this.asyncMyFunction(this.unmountEntity, [...arguments])
    }

    makeSSIReadOnly(seedSSI, callback) {
        const keySSISpace = opendsu.loadAPI('keyssi');
        let parsedSeedSSI = keySSISpace.parse(seedSSI);
        callback(undefined, parsedSeedSSI.derive().getIdentifier());
    }


    _getDsuStoragePath(keySSI, path = this.PATH) {
        return path + '/' + keySSI + '/data.json';
    }

    swapParamsIfPathIsMissing(path, callback) {
        return typeof path === 'function' ? [this.PATH, path] : [path, callback];
    }

    asyncMyFunction = (func, params) => {
        func = func.bind(this)
        return new Promise((resolve, reject) => {
            func(...params, (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            })
        })
    }

    cloneDSU = (fromDSUSSI, toDSUPath, callback) => {
        this.createDSUAndMount(toDSUPath, (err, keySSI) => {
            if (err) {
                return callback(err);
            }
            this.copyDSU(fromDSUSSI, keySSI, (err, copiedFiles) => {
                if (err) {
                    return callback(err);
                }
                let cloneDetails = {
                    ssi: keySSI,
                    copiedFiles: copiedFiles
                }
                callback(undefined, cloneDetails);
            });
        })
    }

    copyDSU = (fromDSUSSI, toDSUSSI, callback) => {
        const resolver = opendsu.loadAPI('resolver');
        resolver.loadDSU(fromDSUSSI, {skipCache: true}, (err, fromDSU) => {
            if (err) {
                return callback(err);
            }
            resolver.loadDSU(toDSUSSI, {skipCache: true}, (err, toDSU) => {
                if (err) {
                    return callback(err);
                }
                fromDSU.listFiles('/', (err, files) => {
                    if (err) {
                        return callback(err);
                    }
                    let copiedFiles = [];
                    let copyFileToDSU = (file) => {
                        fromDSU.readFile(file, (err, data) => {
                            if (err) {
                                return copyFileToDSU(files.pop());
                            }
                            if (file === "data.json") {
                                data = JSON.parse(data.toString());
                                data.genesisSSI = fromDSUSSI;
                                data.uid = toDSUSSI;
                                data.KeySSI = toDSUSSI;
                                data.keySSI = toDSUSSI;
                                data = JSON.stringify(data);
                            }
                            toDSU.writeFile(file, data, (err) => {
                                if (err) {
                                    return callback(err);
                                }

                                copiedFiles.push(file);
                                if (files.length === 0) {
                                    return callback(undefined, copiedFiles)
                                }
                                copyFileToDSU(files.pop());
                            })
                        })
                    }
                    copyFileToDSU(files.pop());
                });
            });
        });
    }

    readFile(path, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        this.letDSUStorageInit().then(() => {
            this.DSUStorage.readFile(path, (err, data) => {
                if (err) {
                    return callback(err, undefined);
                }
                return callback(null, data);
            });
        })
    }

    writeFile(path, filebuffer, callback) {
        [path, callback] = this.swapParamsIfPathIsMissing(path, callback);
        this.letDSUStorageInit().then(() => {
            this.DSUStorage.writeFile(path, filebuffer, (err, data) => {
                if (err) {
                    return callback(err, undefined);
                }
                return callback(null, data);
            });
        })
    }

    async readFileAsync(path) {
        return this.asyncMyFunction(this.readFile, [...arguments]);
    }
}

module.exports = DSUService;