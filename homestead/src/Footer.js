import React from "react";
import "./Footer.css";
import masthead from "./images/White+Masthead.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
      <div className="footer">
        <div className="footerbar">
          <div className="footer_socialMedia">
            <a href="https://twitter.com/ucsdcircle"><InstagramIcon /></a>
            <a href="https://www.facebook.com/groups/ucsdcki"><FacebookIcon /></a>
            <a href="https://instagram.com/ucsdcirclek"><TwitterIcon /></a>
            <img src="https://spng.pinpng.com/pngs/s/57-575218_icon-free-download-png-discord-logo-png-transparent.png" width="40" height="40" ></img>
          </div>
        </div>
      </div>
  );
}

export default Footer;

