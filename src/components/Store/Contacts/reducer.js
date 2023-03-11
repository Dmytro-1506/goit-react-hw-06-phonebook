import * as actions from './actionTypes';
import { defaultContacts as initState } from '../defaultContacts';

export const contactsReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.CONTACT_ADDED: {
			return [...state, action.payload];
		}
        case actions.CONTACT_DELETED: {
			return state.filter((item) => item.id !== action.payload);
		}
		default:
			return state;
	}
};