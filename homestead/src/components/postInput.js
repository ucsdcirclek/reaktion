import React, { useState } from 'react';
import firebase from "../firebase";
import '../App.css';

const PostInput = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (x) => {
    x.preventDefault();
    firebase.firestore().collection('announcements').add({
      message: message,
    })
    .then(() => {
      alert('Message has been submitted😁');
    })
    .catch((error) => {
      alert(error.message);
    });

    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Announcments Submissions</h1>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(x) => setMessage(x.target.value)}
      ></textarea>
      <button>Submit</button>
    </form>
  );
}

export default PostInput;
