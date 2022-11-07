module.exports = {
    ConsentModel: require("./HL7/ConsentModel").getConsentModel(),
    ContractModel: require("./HL7/ContractModel").getContractModel(),
    GroupModel: require("./HL7/GroupModel").getGroupModel(),
    OrganizationModel: require("./HL7/OrganizationModel").getOrganizationModel(),
    PatientModel: require("./HL7/PatientModel").getPatientModel(),
    PlanDefinitionModel: require("./HL7/PlanDefinitionModel").getPlanDefinitionModel(),
    PractitionerModel: require("./HL7/PractitionerModel").getPractitionerModel(),
    PractitionerRoleModel: require("./HL7/PractitionerRoleModel").getPractitionerRoleModel(),
    QuestionnaireModel: require("./HL7/QuestionnaireModel").getQuestionnaireModel(),
    QuestionnaireResponseModel: require("./HL7/QuestionnaireResponseModel").getQuestionnaireResponseModel(),
    RelatedPersonModel: require("./HL7/RelatedPersonModel").getRelatedPersonModel(),
    ResearchStudyModel: require("./HL7/ResearchStudyModel").getResearchStudyModel(),
    ResearchSubjectModel: require("./HL7/ResearchSubjectModel").getResearchSubjectModel(),
    getTrialConsent: require("./HL7/TrialConsent").getTrialConsent,
    getSiteConsent: require("./HL7/SiteConsent").getSiteConsent
};