import React from 'react';

const Square = (props) => {
  function onClickedSquare() {
    props.clickedSquare();
  }

  return(
    <div>
      <button onClick={onClickedSquare}>{props.nextTic}</button>
    </div>
  );
};

export default Square;