import React, { Component } from 'react';
import logo from './uTimesLogo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/userSignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Sign Up</h1>
        <SignUp />
      </div>
    );
  }
}

export default App;
