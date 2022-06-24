const MESSAGES = {

    HCO: {
        ADD_TRIAL : 'add-trial',
        ADD_CONSENT_VERSION: 'add-econsent-version',
        ADD_CONSENT : 'add-site-consent',
        DELETE_TRIAL : 'delete-trial',
        UPDATE_ECOSENT : 'update-econsent',
        SITE_STATUS_CHANGED: 'site-status-change',
        UPDATE_BASE_PROCEDURES: 'update-base-procedures',
        ADD_SITE : 'add-site',
        ASQ_QUESTION: 'ask-question',
        ADD_TRIAl_CONSENT : 'add-trial-consent',
        ADD_PATIENT_TO_TRIAL: 'add-to-trial',
        // NEW MESSAGES
        SEND_HCO_DSU_TO_PATIENT: 'send_hco_dsu_to_patient',
        SEND_HCO_DSU_TO_SPONSOR: 'send-hco-dsu-to-sponsor',
        SEND_REFRESH_CONSENTS_TO_PATIENT: 'send_refresh_consents',
        CLINICAL_SITE_QUESTIONNAIRE: 'clinical_site_questionnaire',

        COMMUNICATION: {
            SPONSOR: {
                SIGN_ECONSENT: 'HCO signed econsent',
                VISIT_CONFIRMED: 'HCO confirmed a visit'
            },
            PATIENT: {
                ADD_TO_TRIAL: 'You were added to trial',
                SCHEDULE_VISIT: 'A visit was scheduled.',
                VISIT_DECLINED: 'A visit was declined by the patient',
                VISIT_ACCEPTED: 'A visit was accepted by the patient',
                VISIT_RESCHEDULED: 'A visit was rescheduled by the patient'
            },
            TYPE: {
                ADD_TO_TRIAL: 'add-to-trial',
                SCHEDULE_VISIT: 'schedule_visit',
                UPDATE_TP_NUMBER: 'update-tpNumber',
                QUESTION_RESPONSE: 'question_response',
                UPDATE_VISIT: 'update_visit',
                VISIT_RESPONSE: 'visit-response',
                VISIT_CONFIRMED: 'visit-confirmed'
            }
        },
        FEEDBACK: {
            SUCCESS: {
                ADD_TRIAL_PARTICIPANT: 'Trial participant added successfully!'
            },
            ERROR: {
                ADD_TRIAL_PARTICIPANT: 'ERROR: There was an issue creating the trial participant'
            }
        }
    },

    PATIENT: {
        ADD_TO_TRIAL: 'add-to-trial',
        ADD_TRIAL_SUBJECT: 'add-trial-subject',
        SCHEDULE_VISIT: 'schedule-visit',
        UPDATE_TP_NUMBER: 'update_tpNumber',
        QUESTION_RESPONSE: 'question_response',
        UPDATE_VISIT: 'update_visit',
        VISIT_RESPONSE: 'visit-response',
        VISIT_CONFIRMED: 'visit-confirmed',
        CREATE_DP: 'create_dp',

        SEND_TRIAL_CONSENT_DSU_TO_HCO: 'send-trial-consent-to-hco',
    },

    SPONSOR :{
        SIGN_ECOSENT : 'sign-econsent',
        ADD_CONSENT_VERSION:"add-econsent-version",
        UPDATE_ECOSENT: 'update-econsent',
        UPDATE_SITE_STATUS: 'update-site-status',
        UPDATE_SITE: 'update-site',
        TP_ADDED:"tp-added",
        TP_CONSENT_UPDATE:"tp-consent-update",
        ADDED_TS_NUMBER:"added-ts-number"
    }

}

const ECO_STATUSES = {
    TO_BE_SIGNED: 'Acknowledgement required',
    WITHDRAW: 'TP Withdrawed',
    CONTACT: 'Reconsent required',
    DECLINED: 'TP Declined'
}

const NOTIFICATIONS_TYPE = {
    NEW_TRIAL:"new_trial",
    NEW_VISIT:"new_visit",
    VISIT_SCHEDULED:"schedule_visit",
    VISIT_UPDATE:"update_visit",
    TRIAL_UPDATES: 'Trial Updates',
    WITHDRAWS: 'Withdraws',
    CONSENT_UPDATES: 'Consent Updates',
    MILESTONES_REMINDERS: 'Milestones Reminders',
    TRIAL_SUBJECT_QUESTIONS: 'Trial Subject Questions',
    NEW_FEEDBACK:"new_feedback",
    NEW_EVIDENCE: 'new_evidence',
    NEW_STUDY: "new_study",
    NEW_HEALTHDATA: "new_healthdata",
    NEW_TPNUMBER: "TP number was assigned for yourself",
    NEW_CONSENTS: "New Consents"
}

const TRIAL_PARTICIPANT_STATUS = {
    ENROLLED: 'Enrolled',
    WITHDRAW: 'Withdrawed',
    DECLINED: 'Declined',
    SCREENED: 'Screened',
    PLANNED: 'Planned',
    END_OF_TREATMENT: "End Of Treatment",
    COMPLETED: "Completed",
    DISCONTINUED: "Discontinued",
    SCREEN_FAILED: "Screen Failed"
}
const DATE_UTILS = {
    FORMATS: {
        YearMonthDayPattern: "YYYY-MM-DD"
    }
}
module.exports = {
    DATE_UTILS,
    MESSAGES,
    ECO_STATUSES,
    TRIAL_PARTICIPANT_STATUS,
    NOTIFICATIONS_TYPE
};