import React from 'react';
import Row from './Row';
import '../styles/Board.css';

const Board = (props) => {
  const rows = [...props.rowInd];

  return (
    <div className={`Board${props.isGameComplete!==''?'-disable':''}`}>
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