import React from "react";
import Login from "./Login.js";
import Footer from "../Footer.js";
import "./LParent.css";
import { Link } from 'react-router-dom';



function LParent() {
  return (
    <div className="lparent">
        <div className="lparent_upper">
            <div className="lparent_upperLogin">
                <h1>Member Login</h1>
                <Login />
            </div>
            <div className="lparent_upperRight">
                <h1>Not a Member? Join Us!</h1>
                <p>CKI (Circle K International) is a collegiate organization that is devoted
                to helping universities join a global network of responsible citizens and leaders
                with a lifelong commitment to service.</p>
                <div className="lparent_button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQKFtTjYOs6yOsqtHAEMbHIOt3V3NrYWLm41V6Xyk0nE7vyw/viewform"><button>Register</button></a>
                    <Link to= '/about' style={{ textDecoration: 'none' }}><button>Learn More</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default LParent;
