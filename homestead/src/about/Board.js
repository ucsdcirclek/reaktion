import React from "react";
import "./Board.css";

function Board({ title, name, email, image}) {
  return (
    <div className="board">
      <img src={image} className="board_image"/>
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{email}</p>
    </div>
  );
}

export default Board;
