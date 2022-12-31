import * as contanctAction from './action'

export const setContact = (contact) => {
    return {
        type: contanctAction.SET_CONTACT,
        payload: contact
    }
}

export const updateContact = (contact) => {
    return {
        type: contanctAction.UPDATE_CONTACT,
        payload: contact
    }
}