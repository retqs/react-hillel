import React, { Component } from 'react';
import propTypes from '../propTypes';

export default class CreateContact extends Component {
  state = {
    isFocused: {
      name: false,
      surname: false,
      age: false,
      phone: false
    }
  };

  render() {
    const { isFocused } = this.state;
    const { isCreateNewContacts, newContact, handleNewContact, onSubmit } = this.props;

    return (
      <form className={`form ${isCreateNewContacts ? 'reveal' : ''}`} onSubmit={onSubmit}>
        <fieldset className='form__row'>
          <label className='form__label' style={{ top: isFocused.name || newContact.name !== '' ? '-25px' : '5px' }}>
            Name
          </label>
          <input
            type='text'
            name='name'
            autoComplete='off'
            onFocus={e => this.setState({ isFocused: { [e.target.name]: true } })}
            onBlur={e => this.setState({ isFocused: { [e.target.name]: false } })}
            value={newContact.name}
            onChange={handleNewContact}
          ></input>
        </fieldset>
        <fieldset className='form__row'>
          <label
            className='form__label'
            style={{ top: isFocused.surname || newContact.surname !== '' ? '-25px' : '5px' }}
          >
            Surname
          </label>
          <input
            type='text'
            name='surname'
            autoComplete='off'
            onFocus={e => this.setState({ isFocused: { [e.target.name]: true } })}
            onBlur={e => this.setState({ isFocused: { [e.target.name]: false } })}
            value={newContact.surname}
            onChange={handleNewContact}
          ></input>
        </fieldset>
        <fieldset className='form__row'>
          <label className='form__label' style={{ top: isFocused.age || newContact.age !== '' ? '-25px' : '5px' }}>
            Age
          </label>
          <input
            type='text'
            name='age'
            autoComplete='off'
            onFocus={e => this.setState({ isFocused: { [e.target.name]: true } })}
            onBlur={e => this.setState({ isFocused: { [e.target.name]: false } })}
            value={newContact.age}
            onChange={handleNewContact}
          ></input>
        </fieldset>
        <fieldset className='form__row'>
          <label className='form__label' style={{ top: isFocused.phone || newContact.phone !== '' ? '-25px' : '5px' }}>
            Phone Number
          </label>
          <input
            type='text'
            name='phone'
            autoComplete='off'
            onFocus={e => this.setState({ isFocused: { [e.target.name]: true } })}
            onBlur={e => this.setState({ isFocused: { [e.target.name]: false } })}
            value={newContact.phone}
            onChange={handleNewContact}
          ></input>
        </fieldset>
        <button className='form__submit' type='submit'>
          <span>Add</span>
        </button>
      </form>
    );
  }
}

CreateContact.propTypes = {
  isCreateNewContacts: propTypes.boolCheck.isRequired
};
