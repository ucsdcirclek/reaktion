import React from 'react';
import './App.css';

class NameForm extends React.Component {
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
    alert('A name and password was submitted: ' + this.state.value);
    event.preventDefault();
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
      <h2>Sign Up</h2>
      <NameForm />
    </div>
    
  );
}

export default Profile;
