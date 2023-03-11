import { legacy_createStore as createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './Contacts/reducer';
import { filterReducer } from './Filter/reducer';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
});

export const store = createStore(rootReducer, enhancer);