import React, { Component } from 'react';
import propTypes from '../propTypes';

export default class Contact extends Component {
  select = () => {
    const { contact, selectContact, resetSelected } = this.props;

    contact.isSelected ? resetSelected() : selectContact(contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <li className={`contact ${contact.isSelected ? 'selected' : ''}`} onClick={this.select}>
        <h1 className='contact__title'>
          {contact.name} {contact.surname}
        </h1>
        <h4 className='contact__mobNum'>Phone number: {contact.phone}</h4>
      </li>
    );
  }
}

Contact.propTypes = {
  contact: propTypes.contact.isRequired
};
