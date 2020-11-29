import React from 'react';
import './Board.css';

function Board({ title, name, email, image}) {
  return (
    <div className='board'>
      <img src={image} className='board_image'/>
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{email}</p>
    </div>
  );
}

export default Board;
