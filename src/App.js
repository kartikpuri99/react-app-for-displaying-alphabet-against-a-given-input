import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => { this.deleteCharHandler(index) }} />
    })
    return (
      <div className="App">
        <ol>
          <li>A react app which returns every alphabet we type in the input box</li>
            <li>checks whether a given string is too short or to long</li>
            <li>delete a given character if we click on the box</li>

        </ol>
          
        <hr />
        <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
