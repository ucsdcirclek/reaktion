import React, { useState, useEffect } from "react";
import CalendarCogs from "./calendarCogs/CalendarCogs.js";
import Login from "./LoginC.js";
import Post from "./Post.js";
import Footer from "../Footer.js";
import "./Calendar.css";
import firebase from "firebase";
import db from "../firebase";

function Calendar() {
  /*Should constantly look for posts and send them to the event components*/
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className='calendar'>
      <CalendarCogs />
      <div className="calendar_lower">
        <Login className="calendar_login"/>
        <div className='calendar_event'>
          {posts.map((post) => (
            <Post
              key={post.data.id}
              date = {post.data.date}
              description = {post.data.description}
              endtime = {post.data.endtime}
              starttime = {post.data.starttime}
              title = {post.data.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calendar;
