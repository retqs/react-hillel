import React, { Component } from 'react';
import SelectedContact from '../SelectedContact/SelectedContact';
import CreateContact from '../CreateContact/CreateContact';
import propTypes from '../propTypes';

export default class ViewSelectedContact extends Component {
  render() {
    const {
      selectedContact,
      onDelete,
      handleEdit,
      isCreateNewContacts,
      toggleContactForm,
      handleNewContact,
      newContact,
      onSubmit,
      saveChanges,
      resetSelected
    } = this.props;

    return (
      <div className='selectedContact'>
        {selectedContact === null ? (
          <>
            <article className='selectedContact__blank'>
              <h1>Select Contact to Edit/Inspect</h1>
              <h3>or</h3>
              <h1 className='selectedContact__newContact' onClick={() => toggleContactForm()}>
                Create a new one
              </h1>
            </article>
            <CreateContact
              isCreateNewContacts={isCreateNewContacts}
              handleNewContact={handleNewContact}
              newContact={newContact}
              onSubmit={onSubmit}
            ></CreateContact>
          </>
        ) : (
          <SelectedContact
            resetSelected={resetSelected}
            selectedContact={selectedContact}
            onDelete={onDelete}
            handleEdit={handleEdit}
            saveChanges={saveChanges}
          ></SelectedContact>
        )}
      </div>
    );
  }
}

ViewSelectedContact.propTypes = {
  selectedContact: propTypes.selectedContact,
  toggleContactForm: propTypes.fnCheck.isRequired
};
