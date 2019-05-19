import React from 'react';

class Square extends React.Component {
  state = {
    isFilled: false
  }

  onClickedSquare = () => {
    const isFilled = this.state.isFilled;
    const key = parseInt(this.props.squareID) - 1;


    if (!isFilled) {
      this.setState({isFilled: true})
      this.props.clickedSquare(key);
    }
  }

  render() {
    return(
      <button
        onClick={this.onClickedSquare}
      >
        {this.props.squareVal}
      </button>
    );
  }
};

export default Square;