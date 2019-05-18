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
            nextTic={props.nextTic}
            rowID={row}
            squareInd={props.squareInd}
            clickedSquare={props.clickedSquare}
          />
        )
      })}
    </div>
  );
};

export default Board;