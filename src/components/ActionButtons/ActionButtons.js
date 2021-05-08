import React from 'react';

const ActionButtons = props => {

  return (
    <div>
      <button onClick={props.addRandomContact}>Add Random Contact</button>
      <button onClick={() => console.log('sort by name')}>Sort by Name</button>
      <button onClick={() => console.log('sort by popularity')}>Sort by Popularity</button>
    </div>
  )
};

export default ActionButtons;
