import React, { useState, useEffect } from "react";
import "./MyEvents.css";
import firebase from "firebase";
import db from "../firebase";

function MyEvents() {

  /*const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").where("date", "==", awesomeDate).onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, [month]);
  */
  return (
    <div className="myEvents">
      <p>Hello World!</p>
    </div>
  );
}

export default MyEvents;
