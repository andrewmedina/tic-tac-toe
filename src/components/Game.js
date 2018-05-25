import React, {Component} from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{squares: Array(9)}],
      moveCount: 0,
      xIsNext: true,
    };
  }

  calculateWinner(squares) {
    const winners = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < winners.length; i++) {
        let [a, b, c] = winners[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.moveCount + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (squares[i] || this.calculateWinner(squares)) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{squares}]),
      moveCount: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    let current = this.state.history[this.state.moveCount], status;
    let winner = this.calculateWinner(current.squares);

    winner ? status = 'Winner: ' + winner : status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div>
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div>
          <div>
            {status}
          </div>
          <div>
            <button onClick={() => {
              this.setState({
                history: [{squares: Array(9)}],
                moveCount: 0,
                xIsNext: true,
              });
            }}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
