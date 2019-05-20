import React from 'react';
import '../styles/Squares.css';

class Square extends React.Component {
  state = {
    isFilled: false
  }

  onClickedSquare = () => {
    const { isFilled  } = this.state;
    const key = parseInt(this.props.squareID) - 1;

    if (isFilled === true && this.props.squareVal === null) {
      this.props.clickedSquare(key);
    } else if (!isFilled) {
      this.setState({ isFilled: !isFilled })
      this.props.clickedSquare(key);
    }
  }

  render() {
    return(
      <button
        className='square'
        onClick={this.onClickedSquare}
        disabled={this.props.squareVal === null? false:true}
      >
        {this.props.squareVal}
      </button>
    );
  }
};

export default Square;