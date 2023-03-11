import * as actions from './actionTypes';

export const filterContacts = (name) => {
    return {
		type: actions.FILTER_CONTACTS,
		payload: name,
	};
}