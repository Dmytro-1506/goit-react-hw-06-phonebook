import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from './Contacts/reducer';
import { filterReducer } from './Filter/reducer';

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});