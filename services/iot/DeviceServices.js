const DSUService = require("../DSUService");

class DeviceServices extends DSUService {

    constructor() {
        super('/device');
    }

    mountDevice = (keySSI, callback) => this.mountEntity(keySSI, callback);

    searchDevice(callback) {
        this.getEntities((err, devices) => {
            if (err) {
                return callback(err)
            }
            callback(err, devices)
        })
    }  

    saveDevice(device, callback) {
        this.saveEntity(device, callback);
    }

    updateDevice(device, callback) {
        this.updateEntity(device, callback);
    }

    deleteDevice(device, callback) {
        console.log("delete device WIP!")
    }
}

module.exports = DeviceServices;
