import React, { useState, useEffect } from "react";
import TrueNewEvent from "./TrueNewEvent.js";
import "./MyEvents.css";
import firebase from "firebase";
import db from "../firebase";


function MyEvents({pid}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="myEvents">
      {posts.map((post) => (
        <TrueNewEvent
          pid = {pid}
          docID = {post.id}
          userList = {post.data.userList}
          title = {post.data.title}
          starttime = {post.data.starttime}
          endtime = {post.data.endtime}
          occupancy = {post.data.occupancy}
          location = {post.data.location}
          description = {post.data.description}
          list = {post.data.list}
          category = {post.data.categories}
          date = {post.data.date}
        />
      ))}
    </div>
  );
}

export default MyEvents;
