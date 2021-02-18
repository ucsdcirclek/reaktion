import React from "react";
import "./Post.css";

function Post({ date, description, endtime, starttime, title }) {
  let beginTime = String(starttime).substring(0, 2);
  if (parseInt(beginTime) > 12) {
    beginTime = (beginTime - 12) + ":" + String(starttime).substring(3, 5) + "pm";
  } else {
    beginTime = String(starttime) + "am";
  }

  let lastTime = String(endtime).substring(0, 2);
  if (parseInt(lastTime) > 12) {
    lastTime = (lastTime - 12) + ":" + String(endtime).substring(3, 5) + "pm";
  } else {
    lastTime = String(endtime) + "am";
  }
  return (
    <div className="post">
      <h1>{title}</h1>
      <h2>{date}</h2>
      <h3>{beginTime} - {lastTime}</h3>
      <p>{description}</p>
      <button>RVSP!</button>
    </div>
  );
}

export default Post;
