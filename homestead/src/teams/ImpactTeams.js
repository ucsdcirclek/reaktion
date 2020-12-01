import React from 'react';
import './ImpactTeams.css';

function ImpactTeams({name, image, description, status, page, application}) {
  return(
    <div className="impactTeams">
      <img src={image} className="impactTeams_logo"/>
      <div className="impactTeams_info">
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>{description}</p>
        <a href={page}><h2>Learn More</h2></a>
        <a href={application}><h2>Apply!</h2></a>
      </div>
    </div>
  );
}

export default ImpactTeams;
