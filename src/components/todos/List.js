import React from 'react';

const List = ({ name, items }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        items.map( item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </div>
)

export default List;
