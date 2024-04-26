import React, { Component } from 'react';
import { Wrapper } from './app.styled';
import { ContactForm } from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';
import { INITIAL_STATE } from 'constants/initial-contacts-state';
import { saveContacts } from 'store/localStorage';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: INITIAL_STATE.contacts,
      filter: '',
    };

    this.changeFilter = this.changeFilter.bind(this);
    this.addContact = this.addContact.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const oldState = this.state;

    if (nextState === oldState) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.contacts !== prevState.contacts) {
      saveContacts(this.state.contacts);
    }
  }

  changeFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const existContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (existContact) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    this.setState({ contacts: [...contacts, newContact] });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return filter.trim() === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  deleteContact = event => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== event.target.name),
    });
  };

  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onFilterChange={this.filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
