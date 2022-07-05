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
        UPDATE_STATUS: 'update_status',
        VISIT_SCHEDULED: 'schedule_visit',
        VISIT_CONFIRMED: 'visit_confirmed',
        NEW_HEALTHDATA: "new_healthdata",


        COMMUNICATION: {
            SPONSOR: {
                SIGN_ECONSENT: 'HCO signed econsent',
                DECLINE_ECONSENT: 'HCO declined econsent',
                VISIT_CONFIRMED: 'HCO confirmed a visit'
            },
            PATIENT: {
                ADD_TO_TRIAL: 'You were added to trial',
                SCHEDULE_VISIT: 'A visit was scheduled.',
                VISIT_DECLINED: 'A visit was declined by the patient',
                VISIT_ACCEPTED: 'A visit was accepted by the patient',
                VISIT_RESCHEDULED: 'A visit was rescheduled by the patient',
            },
            TYPE: {
                ADD_TO_TRIAL: 'add-to-trial',
                SCHEDULE_VISIT: 'schedule_visit',
                UPDATE_TP_NUMBER: 'update-tpNumber',
                QUESTION_RESPONSE: 'question_response',
                UPDATE_VISIT: 'update_visit',
                VISIT_RESPONSE: 'visit-response',
                VISIT_CONFIRMED: 'visit_confirmed',

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
        DECLINE_ECOSENT : 'decline-econsent',
        ADD_CONSENT_VERSION:"add-econsent-version",
        UPDATE_ECOSENT: 'update-econsent',
        UPDATE_SITE_STATUS: 'update-site-status',
        UPDATE_SITE: 'update-site',
        TP_ADDED:"tp-added",
        TP_CONSENT_UPDATE:"tp-consent-update",
        ADDED_TS_NUMBER:"added-ts-number"
    },

    RESEARCHER: {
        NEW_FEEDBACK: 'new_feedback',
        NEW_EVIDENCE:"new_evidence",
    }

}

const ECO_STATUSES = {
    TO_BE_SIGNED: 'Acknowledgement required',
    WITHDRAW: 'TP Withdrawed',
    CONTACT: 'Reconsent required',
    DECLINED: 'TP Declined'
}

const NOTIFICATIONS_TYPE = {
    TRIAL_UPDATES: 'Trial Updates',
    WITHDRAWS: 'Withdraws',
    CONSENT_UPDATES: 'Consent Updates',
    MILESTONES_REMINDERS: 'Milestones Reminders',
    TRIAL_SUBJECT_QUESTIONS: 'Trial Subject Questions',

    //New Notifications Dictionary

    // WITHDRAWS : {
    //     notificationTitle:"WITHDRAWS",
    //     // tagPage:"",
    // },
    // CONSENT_UPDATES : {
    //     notificationTitle:"Consent Updates",
    //     // tagPage:"",
    // },
    // MILESTONES_REMINDERS : {
    //     notificationTitle:"Milestones Reminders",
    //     // tagPage:"",
    // },
    // TRIAL_SUBJECT_QUESTIONS : {
    //     notificationTitle:"Trial Subject Questions",
    //     // tagPage:"",
    // },
    // TRIAL_UPDATES : {
    //     notificationTitle:"Trial Updates",
    //     tagPage:"trial",
    // },

    ///
    NEW_TRIAL : {
        notificationTitle:"New trial",
        tagPage:"trial",
    },
    NEW_VISIT : {
        notificationTitle:"New visit received",
        tagPage:"task-calendar",
    },
    VISIT_UPDATE : {
        notificationTitle:"Visit updated",
        tagPage:"task-calendar",
    },
    NEW_FEEDBACK : {
        notificationTitle:"New feedback",
        tagPage:"completed-studies",
    },
    NEW_EVIDENCE : {
        notificationTitle:"New evidence",
        tagPage:"completed-studies",
    },
    NEW_STUDY : {
        notificationTitle:"New study",
        tagPage:"completed-studies",
    },
    NEW_HEALTHDATA : {
        notificationTitle:"New healthdata",
        tagPage:"iot-health-studies",
    },
    NEW_INVITATION : {
        notificationTitle:"New research study invitation",
        tagPage:"iot-health-studies",
    },
    NEW_TPNUMBER : {
        notificationTitle:"TP number was assigned for yourself",
        tagPage:"trial",
    },
    NEW_CONSENTS: {
        notificationTitle :"New Consents",
        tagPage:"trial",
    },
    UPDATE_STATUS: {
        notificationTitle :"Tp status updated",
        tagPage:"trial",
    },
    VISIT_CONFIRMED: {
        notificationTitle :"HCO confirmed a visit",
        tagPage:"task-calendar",
    },
    CLINICAL_SITE_QUESTIONNAIRE: {
        notificationTitle :"Received a new questionnaire",
        tagPage:"task-calendar",
    },
    QUESTION_RESPONSE: {
        notificationTitle :"New questionnaire response",
        tagPage:"task-calendar",
    },

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
        YearMonthDayPattern: "YYYY-MM-DD",
        YMDDateTimeFormatPattern: 'YYYY-MM-DD',
        HourFormatPattern: "HH:mm",
        DateTimeFormatPattern: 'DD-MMM-YYYY, HH:mm',
    }
}

module.exports = {
    DATE_UTILS,
    MESSAGES,
    ECO_STATUSES,
    TRIAL_PARTICIPANT_STATUS,
    NOTIFICATIONS_TYPE,
};