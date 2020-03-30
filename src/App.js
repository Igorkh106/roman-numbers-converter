import React from 'react';
import './App.css';
import * as Converter from './helpers/converter.helper'

class App extends React.Component {
  constructor() {
    super();
    this.state = {input: '', result: ''}
  }
  convertToInteger() {
    let {input, result } = this.state;
    const romanRegEx = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

    let validatedInput = input.match(romanRegEx);
    if(validatedInput) {
      result = Converter.toInteger(validatedInput[0]);
      this.setState({result});
    } else {
      this.setState({result: 'Invalid Input'});
    }
  }

  convertToRoman() {
    let {input, result } = this.state;
    if(input.length < 1) { return }

    input = parseInt(input);
    if(input) {
      result = Converter.toRoman(input);
      this.setState({result});
    } else {
      this.setState({result: 'Invalid Input'});
    }

  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({input});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          Roman-integer converter
        </header>
        <div className="Content-form">
          <input value={this.state.input} onChange={(e)=> this.handleChange(e)} type="text" placeholder="type value, ex. 26, XVII" />
          <button onClick={this.convertToInteger.bind(this)}>Convert to integer</button>
          <button onClick={this.convertToRoman.bind(this)}>Convert to roman</button>
          <span>{this.state.result}</span>
        </div>
      </div>
    );
  }

}

export default App;
