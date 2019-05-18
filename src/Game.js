import React from 'react';
import Board from './components/Board';

class Game extends React.Component {
  state = {
    currentTic: '',
    nextTic: '',
    rowInd: [0, 1, 2],
    squareInd: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  }

  clickedSquare = () => {
    const { currentTic } = this.state;

    if (currentTic === null || currentTic === 'o' ) {
      this.setState({ currentTic: 'x', nextTic: 'o' })
    } else {
      this.setState({ currentTic: 'o', nextTic: 'x'  })
    }
  }

  render() {
    return (
      <div className="Game">
        <Board
          nextTic={this.state.nextTic}
          rowInd={this.state.rowInd}
          clickedSquare={this.clickedSquare}
          squareInd={this.state.squareInd}
        />
      </div>
    );
  }
}

export default Game;
