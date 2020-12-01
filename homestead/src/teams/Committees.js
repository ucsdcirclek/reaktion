import React from 'react';
import './Committees.css';

function Committees({name, image, description, status, page, application}) {
  return(
    <div className="committees">
      <img src={image} className="committees_logo"/>
      <div className="committees_info">
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>{description}</p>
        <a href={page}><h2>Learn More</h2></a>
        <a href={application}><h2>Apply!</h2></a>
      </div>
    </div>
  );
}

export default Committees;
