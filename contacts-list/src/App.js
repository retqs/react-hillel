import React, { Component } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import ViewSelectedContact from './components/ViewSelectedContact/ViewSelectedContact';

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        age: 33,
        name: 'Leanne',
        surname: 'Graham',
        phone: '1-770-736-8031 x56442',
        isSelected: false
      },
      {
        id: 2,
        age: 33,
        name: 'Ervin',
        surname: 'Howell',
        phone: '010-692-6593 x09125',
        isSelected: false
      },
      {
        id: 3,
        age: 33,
        name: 'Clementine',
        surname: 'Bauch',
        phone: '1-463-123-4447',
        isSelected: false
      },
      {
        id: 4,
        age: 33,
        name: 'Patricia',
        surname: 'Lebsack',
        phone: '493-170-9623 x156',
        isSelected: false
      },
      {
        id: 5,
        age: 33,
        name: 'Chelsey',
        surname: 'Dietrich',
        phone: '(254)954-1289',
        isSelected: false
      },
      {
        id: 6,
        age: 33,
        name: 'Dennis',
        surname: 'Schulist',
        phone: '1-477-935-8478 x6430',
        isSelected: false
      },
      {
        id: 7,
        age: 33,
        name: 'Kurtis',
        surname: 'Weissnat',
        phone: '210.067.6132',
        isSelected: false
      },
      {
        id: 8,
        age: 33,
        name: 'Nicholas',
        surname: 'Runolfsdottir V',
        phone: '586.493.6943 x140',
        isSelected: false
      },
      {
        id: 9,
        age: 33,
        name: 'Glenna',
        surname: 'Reichert',
        phone: '(775)976-6794 x41206',
        isSelected: false
      },
      {
        id: 10,
        age: 33,
        name: 'Clementina',
        surname: 'DuBuque',
        phone: '024-648-3804',
        isSelected: false
      }
    ],
    selectedContact: null,
    newContact: {
      id: '',
      age: '',
      name: '',
      surname: '',
      phone: '',
      isSelected: false
    },
    isCreateNewContacts: false
  };

  selectContact = id => {
    const tempArr = this.state.contacts.map(contact => {
      return contact.id !== id
        ? {
            ...contact,
            isSelected: false
          }
        : {
            ...contact,
            isSelected: !contact.isSelected
          };
    });
    this.setState({
      contacts: tempArr,
      selectedContact: tempArr.find(item => item.id === id),
      isCreateNewContacts: false
    });
  };

  toggleContactForm = () => {
    this.setState({ isCreateNewContacts: !this.state.isCreateNewContacts });
  };

  resetSelected = () => {
    const tempArr = this.state.contacts.map(contact => {
      return {
        ...contact,
        isSelected: false
      };
    });
    this.setState({ contacts: tempArr, selectedContact: null });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [...this.state.contacts, this.state.newContact],
      newContact: { id: Math.random() * 100, age: '', name: '', surname: '', phone: '', isSelected: false },
      isCreateNewContacts: false
    });
  };

  onDelete = id => {
    const tempArr = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: tempArr, selectedContact: null });
  };

  handleEdit = e => {
    const target = e.target;
    this.setState({
      selectedContact: {
        ...this.state.selectedContact,
        [target.name]: target.value
      }
    });
  };

  saveChanges = value => {
    const { id } = value;
    const tempArr = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...tempArr, value],
      selectContact: value
    });
  };

  handleNewContact = e => {
    const target = e.target;
    this.setState({
      newContact: {
        ...this.state.newContact,
        [target.name]: target.value
      }
    });
  };

  render() {
    const { contacts, selectedContact, isCreateNewContacts, newContact } = this.state;
    return (
      <>
        <header className='appHeader'>Contacts List</header>
        <main className='appWrapper'>
          <section className='ContactsSection'>
            <ContactsList
              contacts={contacts}
              resetSelected={this.resetSelected}
              selectContact={this.selectContact}
              onDelete={this.onDelete}
            ></ContactsList>
          </section>
          <section className='EditContactSection'>
            <ViewSelectedContact
              selectedContact={selectedContact}
              onDelete={this.onDelete}
              handleEdit={this.handleEdit}
              resetSelected={this.resetSelected}
              isCreateNewContacts={isCreateNewContacts}
              toggleContactForm={this.toggleContactForm}
              handleNewContact={this.handleNewContact}
              newContact={newContact}
              onSubmit={this.onSubmit}
              saveChanges={this.saveChanges}
            ></ViewSelectedContact>
          </section>
        </main>
      </>
    );
  }
}

export default App;
