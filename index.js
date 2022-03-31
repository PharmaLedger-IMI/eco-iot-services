const QuestionnaireService = require("./services/iot/QuestionnaireService");
module.exports = {
    DidService:require("./services/DidService"),
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
    EvidenceService:require("./services/iot/EvidenceService"),
    DeviceServices: require("./services/iot/DeviceServices"),
    QuestionnaireService: require("./services/iot/QuestionnaireService"),
    models: require("./models"),
    getDataSourceFactory: () => require("./factories/DataSourceFactory"),
    getBreadCrumbManager: () => require("./others/BreadCrumbManager")
};