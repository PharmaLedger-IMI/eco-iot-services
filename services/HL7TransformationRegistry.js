const HL7Models = require("../models/index.js");
class HL7TransformationRegistry{

    constructor() {
        this.availableTransformations = {};
    }

    registerTransformation(dataType, transformationFn){
        if(!this.availableTransformations[dataType]){
            this.availableTransformations[dataType] = [];
        }
        this.availableTransformations[dataType].push(transformationFn);

    }

    transformationFnExists(dataType){
        return typeof this.availableTransformations[dataType] !=="undefined";
    }

    getTransformationFn(dataType){
        return this.availableTransformations[dataType];
    }

}

let instance = null;
const getHL7TransformationRegistry = () => {
    if (instance === null) {
        instance = new HL7TransformationRegistry();
        instance.registerTransformation("consent",HL7Models.getTrialConsent);
        instance.registerTransformation("consent",HL7Models.getSiteConsent);
    }
    return instance;
};

module.exports = {
    getHL7TransformationRegistry
};