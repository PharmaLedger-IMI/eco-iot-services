function getTrialConsent (entity) {

    if(entity.hasOwnProperty("trialConsentName")){
        return entity;
    }

    return  {
        description: "A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.",
        properties: {
            resourceType: {
                description: "This is a Trial Consent resource",
                const: "Consent"
            },
            id: {
                description: "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
                ref: "#/definitions/string"
            },
            meta: {
                description: "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
                name: "trialConsentName",
                uid: "uid",
                ref: "#/definitions/Meta"
            },
            language: {
                description: "The base language in which the resource is written.",
                ref: "#/definitions/code"
            },
            extension: {
                description: "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                items: {
                    ref: "#/definitions/Extension",
                    version: "currentVersion",
                    versions: [

                    ]
                },
                type: "array"
            },
            identifier: {
                description: "Unique identifier for this copy of the Consent Statement.",
                items: {
                    ref: "#/definitions/Identifier"
                },
                value: "trialConsentId",
                type: "array"
            },
            status: {
                description: "Indicates the current state of this consent.",
                ref: "#/definitions/code"
            },
            scope: {
                description: "A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.",
                ref: "patient-privacy"
            },
            category: {
                description: "A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.",
                items: {
                    type: "Mandatory"
                },
                type: "array"
            },
            sourceAttachment: {
                description: "The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.",
                ref: "#/definitions/Attachment",
                file: "file"
            },
            policy: {
                description: "The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.",
                items: {
                    ref: "#/definitions/Consent_Policy"
                },
                type: "array"
            },
            policyRule: {
                description: "A reference to the specific base computable regulation or policy.",
                ref: "#/definitions/CodeableConcept"
            },
            provision: {
                description: "An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.",
                ref: "#/definitions/Consent_Provision"
            }
        },
        additionalProperties: false,
        required: [
        ]
    }
}

module.exports = {
    getTrialConsent
};


