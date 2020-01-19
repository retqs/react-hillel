import React from 'react';
import './App.css';
import ContactsList from './ContactsList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Contacts List</h1>
        <ContactsList></ContactsList>
      </header>
    </div>
  );
}

export default App;
