import React from "react";
import "./Family.css";

function Family({ image, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className="family">
      <h3>{title}</h3>
    </div>
  );
}

export default Family;
