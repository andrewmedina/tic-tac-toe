import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasGameStarted: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://pbs.twimg.com/profile_images/606568860863463424/79V01uxM_400x400.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Drew's Tic Tac Toe</h1>
        </header>
        {this.state.hasGameStarted ? <Game /> : <button onClick={() => this.setState({hasGameStarted: true})}>Start Game</button>}
      </div>
    );
  }
}

export default App;
