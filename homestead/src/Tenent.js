import React from "react";
import "./Tenent.css";

function Tenent({ title, image, hours }) {
  return (
    <div className="tenent">
      <h3>{title}</h3>
      <p>{hours}/10000 Hours</p>
      <progress className={title} value={hours} max="10000">{hours}</progress>
      <img className="tenent_logo" src={image} alt=""/>
    </div>
  );
}

export default Tenent;
