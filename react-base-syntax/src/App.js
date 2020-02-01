import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: 'farez'
  }

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <UserOutput userName={this.state.userName}/>
        <UserInput userName={this.state.userName} change={this.userNameChangedHandler}/>
      </div>
    );
  }
}

export default App;
