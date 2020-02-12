import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  };

  inputChangedHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  deleteCharacter = (charIndex) => {
    const chars = [...this.state.inputText];
    chars.splice(charIndex, 1);

    this.setState({inputText: chars.join('')});

  }

  render() {

    const chars = this.state.inputText.split('').map((char, index) => {
      return <Char char={char} 
      key={index}
      clicked={() => this.deleteCharacter(index)}/>
    });
    

    return (
      <div className="App">
        <input onChange={this.inputChangedHandler} value={this.state.inputText}/>
        <p>{this.state.inputText.length}</p>
        <Validation length={this.state.inputText.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
