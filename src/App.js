import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Roman-integer converter
      </header>
      <div className="Content-form">
        <input type="text" placeholder="type value, ex. 26, XVII" />
        <button>Convert to integer</button>
        <button>Convert to roman</button>
        <span>result</span>
      </div>
    </div>
  );
}

export default App;
