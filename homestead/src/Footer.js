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
      <div className="footerbar">
        <div className="footer_socialMedia">
          <a href="https://www.facebook.com/groups/ucsdcki"><FacebookIcon /></a>
          <a href="https://instagram.com/ucsdcirclek"><TwitterIcon /></a>
          <a href="https://twitter.com/ucsdcircle"><InstagramIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
