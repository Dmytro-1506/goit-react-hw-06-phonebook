// import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const localContacts = localStorage.getItem("contacts")
  //   if (localContacts) {
  //     return JSON.parse(localContacts)
  //   } else {
  //     return 
  //   }
  // });
  
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts))
  // }, [contacts])

  // const addContact = (newContact) => {
  //   const isExist = () => {
  //     return contacts.find(contact => {
  //       return (contact.name === newContact.name)
  //     })
  //   }
  //   if (isExist()) {
  //     return alert(`${newContact.name} is already in contacts`)
  //   }
  //   return setContacts([...contacts, newContact])
  // }

  // const filterContacts = (event) => {
  //   setFilterName(event.target.value)
  // }

  // const deleteContact = (id) => {
  //   setContacts(prev=>prev.filter(contact => contact.id !== id))
  // }

  return (
    <div
      style={{
        width: '800px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#010101',
        margin: '40px auto',
      }}
    >
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter
        // findContacts={filterContacts}
      />
      <ContactList
        // deleteContact={deleteContact} filteredContacts={findedContacts}
      />
    </div>
  )
};