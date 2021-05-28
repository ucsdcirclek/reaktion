import React from "react";
import Navbar from "./AboutNavbar.js";
import Footer from "../../Footer.js";
import "./Structure.css";

function Structure() {
  return (
    <div className="structure">
      <Navbar />
        <div className="structure_sub">

          <h3>This is Structure</h3>
        </div>
      <Footer />
    </div>
  );
}

export default Structure;
