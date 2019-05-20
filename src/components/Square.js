import React from 'react';
import '../styles/Squares.css';

class Square extends React.Component {
  state = {
    isFilled: false
  }

  onClickedSquare = () => {
    const { isFilled  } = this.state;
    const key = parseInt(this.props.squareID) - 1;


    if (!isFilled) {
      this.setState({ isFilled: true })
      this.props.clickedSquare(key);
    }
  }

  render() {
    return(
      <button
        className='square'
        onClick={this.onClickedSquare}
        disabled={this.state.isFilled}
      >
        {this.props.squareVal}
      </button>
    );
  }
};

export default Square;