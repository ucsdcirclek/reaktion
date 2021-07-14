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
        <img class="footer_image" src="/src/images/footer_left.png">

        <div class="footer_text">
          <div className="footer_socialMedia">
            <a href="https://www.facebook.com/groups/ucsdcki"><FacebookIcon /></a>
            <a href="https://instagram.com/ucsdcirclek"><TwitterIcon /></a>
            <a href="https://twitter.com/ucsdcircle"><InstagramIcon /></a>
          </div>

          <div className="footer_copyRight">
            <CopyrightIcon />
            <p>2017-2021 UC San Diego Circle K International</p>
          </div>
         </div>

        <img class="footer_image footer_image_left" src="/src/images/footer_right.png">

    </div>
  );
}

export default Footer;
