import React from 'react';

const FormAddContacts = props => {
  const [showForm, setShowForm] = React.useState(false);
  
  // Variaveis de estado que vão controlar o nosso formulário!!!
  const [name, setName] = React.useState('');
  const [pictureUrl, setPictureUrl] = React.useState('');
  const [popularity, setPopularity] = React.useState(0);

  const addNewCustomContact = () => {
    props.addNewContact(name, pictureUrl, popularity);

    // resetando o formulário!!!
    setName('');
    setPictureUrl('');
    setPopularity(0);
    setShowForm(false);
  };

  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Create new Contact'}
      </button>

      {showForm && (
        <>
          <h4>Create new Contact</h4>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Contact Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              name="pictureUrl"
              placeholder="Picture Link"
              value={pictureUrl}
              onChange={(event) => setPictureUrl(event.target.value)}
            />
            <input
              type="number"
              name="popularity"
              placeholder="Contact Popularity"
              value={popularity}
              onChange={(event) => setPopularity(event.target.value)}
            />
    
            <button type="button" onClick={addNewCustomContact}>Create</button>
          </div>
        </>
      )}
      
    </>
  )
};

export default FormAddContacts;
