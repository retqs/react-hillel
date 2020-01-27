import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import propTypes from '../propTypes';

export default class ContactsList extends Component {
  render() {
    const { contacts, selectContact, onDelete, resetSelected } = this.props;
    return (
      <ul className='contactsList'>
        {contacts.length === 0 ? (
          <div className='contactsList__emptyList'>Nothing left</div>
        ) : (
          contacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              selectContact={selectContact}
              resetSelected={resetSelected}
              onDelete={onDelete}
            ></Contact>
          ))
        )}
      </ul>
    );
  }
}

ContactsList.propsTypes = {
  contacts: propTypes.contacts.isRequired,
  selectContact: propTypes.fnCheck.isRequired
};
