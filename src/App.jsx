import { useState, useEffect } from 'react';
import './App.css';
import { INITIAL_STATE } from "./constants/initial-contacts-state";
import { ContactForm } from "./components/ContactForm/contactForm";
import { Filter } from "./components/Filter/filter";
import { ContactList } from "./components/ContactList/contactList";
import { saveContacts } from "./store/localStorage";

function App() {
  console.log("Działam");

  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);
  const [filter, setFilter] = useState(INITIAL_STATE.filter);

  const changeFilter = (event) => {
    const { value } = event.target;
    setFilter({ filter: value });
  };

  const addContact = newContact => {
    const existContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (existContact) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts({ contacts: [...contacts, newContact] });
  };

  const filterContacts = () => {
    return filter.trim() === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  const deleteContact = event => {
    setContacts({
      contacts: contacts.filter(contact => contact.id !== event.target.name),
    });
  }

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts, filter]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App
