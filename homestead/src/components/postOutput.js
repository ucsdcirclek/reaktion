import React, { Component } from 'react';
import { db, auth } from "../firebase";
import '../App.css';
//Note to self need to add keys to get rid of warning: https://reactjs.org/docs/lists-and-keys.html#keys
class postOutput extends Component {
  state = {
    posts: null
  }

  componentDidMount(){
    console.log('mounted')
    db.collection('posts')
      .get()
      .then( snapshot => {
        const posts = []
        snapshot.forEach( doc => {
          const data = doc.data()
          posts.push(data)
        })
        this.setState({ posts: posts })
        //console.log(snapshot)
      })
      .catch( error => console.log(error))
  }

  render(){
    return(
      <div>
        <h1>Upperline Students</h1>
        {
          this.state.posts &&
          this.state.posts.map( post => {
            return (
              <div>
                <p>{post.Title}</p>
                <p>{post.Category}</p>
                <p>{post.Description}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default postOutput;
