import { createSlice } from "@reduxjs/toolkit";

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            const newContact = action.payload.newContact;
            const isExist = () => {
                return state.contacts.find(contact => contact.name === newContact.name)
            }
            if (isExist()) {
                return alert(`${newContact.name} is already in contacts`)
            }
            state.contacts.push(newContact)
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        filterContacts(state, action) {
            state.filter = action.payload
        }
    }
});

export const { addContact, removeContact, filterContacts } = phonebookSlice.actions;

export default phonebookSlice.reducer;