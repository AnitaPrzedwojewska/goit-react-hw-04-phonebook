import { useState, useEffect } from 'react';
import './App.css';
import { INITIAL_CONTACTS, INITIAL_FILTER } from "./constants/initial-contacts-state";
import { ContactForm } from "./components/ContactForm/contactForm";
import { Filter } from "./components/Filter/filter";
import { ContactList } from "./components/ContactList/contactList";
import { saveContacts } from "./store/localStorage";

function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  const changeFilter = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const addContact = newContact => {
    console.log('addContact - newContact: ', newContact);
    const existContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (existContact) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const filteredContacts = () => {
    return filter.trim() === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  console.log('App - contacts: ', contacts);
  console.log('App - filter: ', filter);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App
