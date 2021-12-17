module.exports = {
    CommunicationService: require("./services/CommunicationService"),
    CommunicationServiceNew: require("./services/CommunicationServiceNew"),
    DateTimeService: require("./services/DateTimeService"),
    DIDService: require("./services/DIDService"),
    DSUService: require("./services/DSUService"),
    SharedStorage: require("./services/SharedStorage"),
    AbstractAPI: require("./services/AbstractAPI"),
    BaseRepository: require("./repositories/BaseRepository"),
    Constants: require("./utils/Constants"),
    FileDownloader: require("./utils/FileDownloader"),
    FileDownloaderService: require("./utils/FileDownloaderService"),
    HeaderController: require("./utils/HeaderController"),

    models: require("./models")
};