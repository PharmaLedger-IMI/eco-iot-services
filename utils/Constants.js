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
        SEND_HCO_DSU_TO_PATIENT: 'send-hco-dsu-to-patient',
        SEND_HCO_DSU_TO_SPONSOR: 'send-hco-dsu-to-sponsor',
        SEND_REFRESH_CONSENTS_TO_PATIENT: 'send-refresh-consents',

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
                SCHEDULE_VISIT: 'schedule-visit',
                UPDATE_TP_NUMBER: 'update-tpNumber',
                QUESTION_RESPONSE: 'question-response',
                UPDATE_VISIT: 'update-visit',
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
        UPDATE_TP_NUMBER: 'update-tpNumber',
        QUESTION_RESPONSE: 'question-response',
        UPDATE_VISIT: 'update-visit',
        VISIT_RESPONSE: 'visit-response',
        VISIT_CONFIRMED: 'visit-confirmed',

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
    NEW_TRIAL:"New Trial",
    NEW_VISIT:"New Visit",
    VISIT_SCHEDULED:"New visit was scheduled",
    VISIT_UPDATE:"Visit was updated",
    TRIAL_UPDATES: 'Trial Updates',
    WITHDRAWS: 'Withdraws',
    CONSENT_UPDATES: 'Consent Updates',
    MILESTONES_REMINDERS: 'Milestones Reminders',
    TRIAL_SUBJECT_QUESTIONS: 'Trial Subject Questions',
    NEW_FEEDBACK:"New Feedback",
}

const TRIAL_PARTICIPANT_STATUS = {
    ENROLLED: 'Enrolled',
    WITHDRAW: 'Withdrawed',
    DECLINED: 'Declined',
    SCREENED: 'Screened',
    PLANNED: 'Planned'
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