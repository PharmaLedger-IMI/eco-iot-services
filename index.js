module.exports = {
    ProfileService:require("./services/ProfileService"),
    CommunicationService: require("./services/CommunicationService"),
    MessageHandlerService: require("./services/MessageHandlerService"),
    DateTimeService: require("./services/DateTimeService"),
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