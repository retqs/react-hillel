import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <li>
        <div>№ {contact.id}</div>
        <h1>
          {contact.name} {contact.surname}
        </h1>
        <h4>Phone number: {contact.phone}</h4>
      </li>
    );
  }
}
