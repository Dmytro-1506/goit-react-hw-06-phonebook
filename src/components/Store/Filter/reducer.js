import * as actions from './actionTypes';
import { defaultContacts as initState } from '../defaultContacts';

export const filterReducer = (state = initState, action) => {
    console.log(action.payload);
    switch (action.type) {
		case actions.FILTER_CONTACTS: {
			return state.filter((element) => {
        return element.name.toLowerCase().includes(action.payload.toLowerCase())
    });
		}
		default:
			return state;
	}
};