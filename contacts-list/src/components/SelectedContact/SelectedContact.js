import React, { Component } from 'react';
import propTypes from '../propTypes';

export default class SelectedContact extends Component {
  state = {
    isDisabled: true
  };

  saveChanges = () => {
    this.setState({ isDisabled: !this.state.isDisabled });

    this.props.saveChanges(this.props.selectedContact);
  };

  render() {
    const { isDisabled } = this.state;
    const { selectedContact, onDelete, handleEdit, resetSelected } = this.props;
    console.log(this.props);
    return (
      <div className='selectedContact'>
        <button className='selectedContact__closeBtn' onClick={() => resetSelected()}>
          &times;
        </button>
        <div className='selectedContact__row'>
          <input
            className='selectedContact__name'
            type='text'
            name='name'
            value={selectedContact.name}
            disabled={isDisabled}
            autoComplete='off'
            onChange={handleEdit}
          ></input>
          <input
            className='selectedContact__surname'
            name='surname'
            type='text'
            value={selectedContact.surname}
            disabled={isDisabled}
            autoComplete='off'
            onChange={handleEdit}
          ></input>
        </div>
        <div className='selectedContact__row'>
          <fieldset>
            <label>Age:</label>
            <input
              className='selectedContact__age'
              type='text'
              value={selectedContact.age}
              disabled={isDisabled}
              autoComplete='off'
              name='age'
              onChange={handleEdit}
            ></input>
          </fieldset>
          <fieldset>
            <label>Phone Number:</label>
            <input
              className='selectedContact__phoneNum'
              type='text'
              value={selectedContact.phone}
              disabled={isDisabled}
              autoComplete='off'
              name='phone'
              onChange={handleEdit}
            ></input>
          </fieldset>
        </div>
        <footer className='actionBtns'>
          {isDisabled ? (
            <button
              className='actionBtns__btn--edit'
              onClick={() => this.setState({ isDisabled: !this.state.isDisabled })}
            >
              Edit
            </button>
          ) : (
            <button className='actionBtns__btn--save' onClick={() => this.saveChanges()}>
              Save
            </button>
          )}

          <button className='actionBtns__btn--delete' onClick={() => onDelete(selectedContact.id)}>
            Delete &times;
          </button>
        </footer>
      </div>
    );
  }
}

SelectedContact.propTypes = {
  selectedContact: propTypes.selectedContact.isRequired,
  onDelete: propTypes.fnCheck.isRequired,
  handleEdit: propTypes.fnCheck.isRequired
};
