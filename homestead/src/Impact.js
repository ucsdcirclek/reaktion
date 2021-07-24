import React from 'react';
import "./Impact.css";
import logo from "./images/UCSDCKICareP.jpg";


function Impact () {
  return (
    <div className="body">
      <div className="subtitle">
        <h1>Impact Teams</h1>
      </div>
      <div className="intro">
        <h2>What are Impact Teams?</h2>
        <p>Impact teams are a quarter long, community serviced based committee 
          that is lead by a general member, and is gear to a subject they are 
          passionate about! They lead a team of general members to create fundraisers,
          service events, and/or education events in order to spread awareness and 
          promote their cause. Impact teams are a great way to gain leadership experience
          through service within Circle K and make a direct impact on our community.
          Some examples of past causes include animals, homelessness, Alzheimer's Disease,
          and disabilities.
        </p>
      </div>
      
     <div className="subtitle">
      <h2>2 Impact Teams from Last Year</h2>
     </div>

     <div className="team-container">
      <div className="team">
        <h3>CARE-P</h3>
        <div className="sub-body">
          <p>In UCSD CKI's Team CARE-P (Crocheting Animals for Reducing Extreme Poverty,
            we crocheted stuffeed animals to riase money for extreme global poverty. We
            planned a raffle for these animals in order to fundraise for a charity called
            Evidence Action, which uses evidence-based research to efficiently create cost
            efficient interventions for " a world where hundreds of millions of people in the
            poorest places have better opportunities and their lives are measurably improved"
          </p>
        </div>
        <img src={logo}/>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cecae8b-1999-4e65-bd9d-a2159641ced6/d9720hq-588ac71d-9bdd-4a9a-b2b6-319c5606914a.jpg/v1/fill/w_894,h_894,q_70,strp/pill_baby_bucket___amigurumi_crochet_plushies_by_syppahscutecreations_d9720hq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvM2NlY2FlOGItMTk5OS00ZTY1LWJkOWQtYTIxNTk2NDFjZWQ2XC9kOTcyMGhxLTU4OGFjNzFkLTliZGQtNGE5YS1iMmI2LTMxOWM1NjA2OTE0YS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6_fFvKf9He6McUXMqY7o5zgxm37hz8wegndngVbO3DI"/>
      </div>

      <div className="team">
        <h3> Team HOME 2.0 </h3>
        <div className = "sub-body">
          <p>In Team HOME 2.0, we sewed face maks for people experiencing homelessness during
            times of quarantine and pandemic. In a time where businesses were closing their doors
            and widespread confusion surrounded by unknowns, people expericing homelessness where
            a very vulnerable population. THere were not many resources designed to aide them. We
            wanted to help them by providing reusable, handmade face maks in order to help them
            protect themselves and function with a now face-mask-requiring society.
          </p>
        </div>
        <img src="http://cen.acs.org/content/dam/cen/98/18/WEB/09818-scicon9-masks.jpg"/>
        <img src="https://news.uchicago.edu/sites/default/files/styles/full_width/public/images/2020-04/homemade%20masks.jpg?itok=TzB2xCpv"/>
      </div>
     </div>
    </div>
  ); 
}

export default Impact;