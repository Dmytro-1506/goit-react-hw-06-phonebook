import * as actions from './actionTypes';

export const addContact = (newContact) => {
	return {
		type: actions.CONTACT_ADDED,
		payload: newContact,
	};
};

export const deleteContact = (id) => {
    return {
        type: actions.CONTACT_DELETED,
        payload: id,
    }
}