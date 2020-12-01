import React, {useState} from 'react';
import './AboutHeader.css';
import { Link } from "react-router-dom";

function AboutHeader() {
  const [page, setPage] = useState('1')

  function about_CKI() {
      setPage('1');
  }

  function about_Membership(){
    setPage('2');
  }

  function about_Community() {
    setPage('3');
  }

  return (
    <div className='aboutHeader'>
      <Link to= "/about" style={{ textDecoration: 'none' }} onClick={about_CKI}><h2 className={`aboutHeader_link ${page=='1' && "aboutHeader_link--active"}`}>UCSD Circle K</h2></Link>
      <Link to= "/about/membership" style={{ textDecoration: 'none' }} onClick={about_Membership}><h2 className={`aboutHeader_link ${page=='2' && "aboutHeader_link--active"}`}>Membership</h2></Link>
      <Link to= "/about/community" style={{ textDecoration: 'none' }} onClick={about_Community}><h2 className={`aboutHeader_link ${page=='3' && "aboutHeader_link--active"}`}>Community</h2></Link>
    </div>
  );
}

export default AboutHeader;
