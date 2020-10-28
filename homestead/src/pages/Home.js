import React, { Component } from 'react';
import PostInput from '../components/postInput';
import PostOutput from '../components/postOutput';
import '../App.css';

class Home extends Component {
  render(){
    return (
      <main>
        <div>
          <PostInput />
          <PostOutput />
        </div>
      </main>
    )
  }

}
export default Home;
