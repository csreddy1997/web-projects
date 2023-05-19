import React from 'react';
import './App.css';
import header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  return(
    <div>
      <header />
      <AddContact />
      {/*<ContactList />  */}
  </div>
  );
}

export default App;
