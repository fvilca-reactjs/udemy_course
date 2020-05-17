import React, { Component } from 'react';
import './App.css';
import SectionRendering from './sections/conditional'
import Contador from './countdown'

class App extends Component {
  render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <Contador></Contador>
        </header>
      </div>
    );
  }
}

export default App;