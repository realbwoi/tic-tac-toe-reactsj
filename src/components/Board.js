import React from 'react';
import Row from './Row';

const Board = (props) => {
  const rows = [...props.rowInd];

  return (
    <div>
      {rows.map((row, index) => {
        return (
          <Row
            className="row"
            key={rows[index] + 1}
            rowID={row + 1}
            squareInd={props.squareInd}
            clickedSquare={props.clickedSquare}
            squareVal={props.squareVal}
          />
        )
      })}
    </div>
  );
};

export default Board;