import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleInputChange = event => {
    this.setState({ filter: event.target.value })
    };

  actualVisibleContact = () => {
      const { filter, contacts } = this.state;

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    };


  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>

        <input
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        ></input> 


        {contacts.length>0 ? (
          <ContactList
         items={this.actualVisibleContact()}
            // onDelete={this.deleteContacts}
          />
        ) : (
          <p> Phonebook is empty</p>
        )}
        <GlobalStyle />
      </div>
    );
  }
}
