import React from 'react'
import Footer from './Footer.js'
import CareP from './images/UCSDCKICareP.jpg'
import './Impact.css'
function Impact () {
  return (
    <div>
      <div className='impact'>
        <h1>Impact Teams</h1>
        <div className='what'>
          <div className='subtitles'>
            <h2> What are impact teams?</h2>
          </div>
          <p>
            Impact teams are a quarter long, community serviced based committee
            that is lead by a general member, and is geared to a subject they
            are passionate about! They lead a team of general members to create
            fundraisers, service events, and/or educational events in order to
            spread awareness and promote their cause. impact teams are a great
            way to gain leadership experience thorugh service within Circle K
            and make a direct impact on our community. Some examples of past
            causes include animals, homelessness, Alzheimer's Disease, and
            disabilities.
          </p>
        </div>
        <div className='impact-teams'>
          <h2>2 Impact teams from Last Year</h2>
        </div>

        <div className='container'>
          <div className='field'>
            <div className='subtitle'>
              <h2>CARE-P</h2>
            </div>
            <p>
              In UCSD CKI's CARE-P (Crocheting Animals for Reducing Extreme
              Poverty), we crocheted stuffed animals to raise money for extreme
              global poverty. We planned a raffle for there animals in order to
              fundraise for a charity called Evidence Action, which uses
              evidence-based research to efficiently create cost efficient
              interventions for a "world where hundreds of millions of people in
              the poorest place have better opportunities and their lives are
              measurably improved."
            </p>
            <img src={CareP} />
            <img src='https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/28/48859.jpg' />
          </div>

          <div className='field'>
            <div className='subtitle'>
              <h2>Team HOME 2.0</h2>
            </div>
            <p>
              In Team HOME 2.0, we sewed face masks for people experiencing
              homelesness during times of quarantine and pandemic. In a time
              where businesses were closing their doors and widespread confusion
              surrounded by unknowns, people experiencing homelesness were a
              very vulnerable population. There were not many resources designed
              to aide them. We wanted to help them by providing reusable,
              handmade face masks in order to help them protect themselves and
              function with a now face-mask-requiring society.
            </p>
            <img src='https://cdn.thewirecutter.com/wp-content/uploads/2020/03/clothfacemasks-lowres-2x1-1-1024x512.jpg' />
            <img src='https://kdvr.com/wp-content/uploads/sites/11/2020/04/GettyImages-1209048184-e1585953514267.jpg?w=1280' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Impact
