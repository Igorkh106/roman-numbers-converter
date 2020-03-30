import React from 'react';
import './App.css';
import * as Converter from './helpers/converter.helper'

class App extends React.Component {
  constructor() {
    super();
    this.state = {input: '', result: '', error: ''}
  }
  convertToInteger() {
    this.clearErrors();
    let { input, result } = this.state;
    const romanRegEx = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

    let validatedInput = input.match(romanRegEx);
    if(validatedInput) {
      result = Converter.toInteger(validatedInput[0]);
      this.setState({result});
    } else {
      this.setState({result: ''});
      this.setErrors('Please, enter a valid roman number');
    }
  }

  convertToRoman() {
    this.clearErrors();
    let {input, result } = this.state;
    if(input.length < 1) { return }

    input = parseInt(input);
    if(input >= 5000) {
      this.setErrors('Please, enter a number less then 5000');
      return;
    }
    if(input) {
      result = Converter.toRoman(input);
      this.setState({result});
    } else {
      this.setState({result: ''});
      this.setErrors('Please, enter a valid integer');
    }
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({input});
  }

  clearErrors() {
    this.setState({error: null})
  }

  setErrors(error) {
    this.setState({error});
  }

  render () {
    const { input, result, error } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Roman-integer converter
        </header>
        <div className="Content-form">
          <input value={input} onChange={(e)=> this.handleChange(e)} type="text" placeholder="type value, ex. 26, XVII" />
          {error && <span className="Error-bar">{this.state.error}</span>}
          <div className="Buttons-bar">
            <button onClick={this.convertToInteger.bind(this)}>Convert to integer</button>
            <button onClick={this.convertToRoman.bind(this)}>Convert to roman</button>
          </div>
          {result && <span className="Result-bar">{result}</span>}
        </div>
      </div>
    );
  }

}

export default App;
