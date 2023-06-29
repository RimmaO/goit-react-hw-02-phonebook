import { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createContact = data => {
    const newContact = { ...data, id: nanoid() };
    console.log(newContact);
  };

  handleChangeFilter = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm createContact={this.createContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            handleChangeFilter={this.handleChangeFilter}
          />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
