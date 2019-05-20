import React from 'react';
import Square from './Square';
import '../styles/Row.css';

const Row = (props) => {
  const squares = [...props.squareInd];

  return(
    <div className="row">
      { squares.map((square, index ) => {
          return(
            <Square
              className={`square ${squares[props.rowID - 1][index]}`}
              key={`${squares[props.rowID - 1][index]}`}
              rowID={`${props.rowID}`}
              squareID={`${squares[props.rowID - 1][index]}`}
              clickedSquare={props.clickedSquare}
              squareVal={props.squareVal[squares[props.rowID - 1][index] - 1]}
            />
          )
        })
      }
    </div>
  );
};

export default Row;