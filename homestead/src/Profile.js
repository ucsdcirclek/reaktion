import React from 'react';
import './App.css';
import * as firebase from 'firebase';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailValue: '', passValue: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    console.log(this);
    console.log(event);
    this.setState({emailValue: event.target.value});
  }

  handleChangePass(event) {
    this.setState({passValue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name and password was submitted: ' + this.state.emailValue);
    event.preventDefault();
    
    const email = this.state.emailValue;
    const password = this.state.passValue;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input 
            type="name" 
            value={this.state.emailValue} 
            onChange={this.handleChangeEmail} 
            placeholder="email"/>
        </label> <br/>
        <label for="password">
          Password:
          <input 
            type="password" 
            value={this.state.passValue} 
            onChange={this.handleChangePass} 
            placeholder="password"/><br/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <h2 id="sign-Up">Sign Up</h2>
      <SignUp />
      <h2 id="sign-in">Sign In</h2>
      <SignUp />
    </div>

    
  );
}

export default Profile;
