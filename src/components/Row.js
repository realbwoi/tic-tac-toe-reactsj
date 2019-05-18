import React from 'react';
import Square from './Square';

const Row = (props) => {
  const squares = [...props.squareInd];

  return(
    <div>
      { squares.map((square, index ) => {
          return(
            <Square
              className="square"
              key={`${square[index]}-${index}`}
              squareID={`${props.rowID} ${square[index]}`}
              nextTic={props.nextTic}
              clickedSquare={props.clickedSquare}
            />
          )
        })
      }
    </div>
  );
};

export default Row;