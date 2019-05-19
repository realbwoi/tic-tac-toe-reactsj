import React from 'react';
import Board from './components/Board';

class Game extends React.Component {
  state = {
    xNextTic: true,
    rowInd: [0, 1, 2],
    squareInd: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    squareVal: Array(9).fill(null)
  }

  clickedSquare = (key) => {
    const { xNextTic, squareVal } = this.state;

    squareVal[key] = !xNextTic?'o':'x';

    this.setState({ xNextTic: !xNextTic });
  }

  render() {
    return (
      <div className="Game">
        <Board
          rowInd={this.state.rowInd}
          clickedSquare={this.clickedSquare}
          squareInd={this.state.squareInd}
          squareVal={this.state.squareVal}
        />
      </div>
    );
  }
}

export default Game;
