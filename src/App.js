import React from 'react';
import './App.css';
import * as Converter from './helpers/converter.helper'

class App extends React.Component {
  constructor() {
    super();
    this.state = {input: '', result: ''}
  }
  convertToInteger() {
    console.log(this.state);
    const result = Converter.toInteger(this.state.input);
    this.setState({result});
  }

  convertToRoman() {
    console.log(this.state);
    const result = Converter.toRoman(this.state.input);
    this.setState({result});
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
