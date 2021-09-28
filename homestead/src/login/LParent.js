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
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSehDxOf-b1KG0L86ft-1Ssgbju3t0Rl2fAceTaSZB6JyTx5NQ/viewform"><button>Register</button></a>
                    <Link to= '/about' style={{ textDecoration: 'none' }}><button>Learn More</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default LParent;
