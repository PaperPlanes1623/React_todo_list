import React from 'react';
import Todo from './Todo';

const List = ({ name, items, handleClick }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        items.map( item => <Todo key={item.id} {...item} handleClick={handleClick}/>)
      }
    </ul>
  </div>
)

export default List;
