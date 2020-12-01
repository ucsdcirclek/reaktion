import React from 'react';
import ImpactTeams from './ImpactTeams.js';
import Committees from './Committees.js';
import './Teams.css';
import careP from '../images/UCSDCKICareP.jpg';
import techTeam from '../images/TechTeamImage.jpg';

function Teams() {
  return (
    <div className="teams">
      <h2 className="teams_header">UCSD CKI Teams</h2>
      <h2 className="teams_secondHeader">Impact Teams (2020-2021)</h2>
      <ImpactTeams name="Team Care-P" image={careP} status="active"
        description="UCSD CKI Team Care-P is an impact team dedicated to fighting extreme global poverty through the fun activity of crocheting stuffed animals and giving all raffling proceeds to charity."
      />
      <h2 className="teams_secondHeader">Committees</h2>
      <Committees name="UCSD CKI Tech Team" image={techTeam} status="active"
        description="UCSD CKI's Technology Team works to maintain and improve the club's Website, and Minecraft Server."
      />
    </div>
  );
}

export default Teams;
