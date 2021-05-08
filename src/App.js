import React from 'react';
import './App.css';

import ActionButtons from './components/ActionButtons/ActionButtons';
import FormAddContacts from './components/FormAddContacts/FormAddContacts';
import FormAddContactsWithFormik from './components/FormAddContactsWithFormik/FormAddContactsWithFormik';

import contactsJson from './contacts.json';
const contactsSlice = contactsJson.splice(0, 5);

function App() {
  const [contacts, setContacts] = React.useState(contactsSlice);

  const displayFiveContacts = () => {
    return contacts.map(contact => {
      return (
        <tr> 
          <td><img src={contact.pictureUrl} alt={`${contact.name}`} /></td>
          <td>{contact.name} </td>
          <td>{contact.popularity}  </td>
        </tr> 
      )
    });
  };

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contactsJson.length - 1));
    const randomContact = contactsJson.splice(randomIndex, 1)[0];
    setContacts([...contacts, randomContact]);
  };

  const addCustomContact = (name, pictureUrl, popularity) => {
    // usar o setContacts aqui dentro
    const newContactObj = {
      name,
      pictureUrl,
      popularity,
    };

    setContacts([...contacts, newContactObj]);
  };
  
  return (
    <div className="App">
      
      <ActionButtons addRandomContact={addRandomContact} />

      {/* <FormAddContacts addNewContact={addCustomContact} /> */}

      <FormAddContactsWithFormik addNewContact={addCustomContact} />

      <table className="">
        <tr>
          <th>Picture </th>
          <th>Name </th>
          <th>Popularity </th>
        </tr>
        {displayFiveContacts()}
      </table>
      
    </div>
  );
}


export default App;
