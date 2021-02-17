import React from "react";
import "./Footer.css";
import masthead from "./images/White+Masthead.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_socialMedia">
        <a href="https://www.facebook.com/groups/ucsdcki"><FacebookIcon /></a>
        <a href="https://instagram.com/ucsdcirclek"><TwitterIcon /></a>
        <a href="https://twitter.com/ucsdcircle"><InstagramIcon /></a>
      </div>
      <div className="footer_copyRight">
        <CopyrightIcon />
        <p>2017-2020 UC San Diego Circle K International</p>
      </div>
      <img src={masthead} className="footer_image"/>
    </div>
  );
}

export default Footer;
