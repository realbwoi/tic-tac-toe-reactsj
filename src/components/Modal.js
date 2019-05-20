import React from 'react';
import '../styles/Modal.css'

const Modal = props => {
  const { isGameComplete, show } = props;
  const showModal = show ? 'modal-displayed' : 'modal-hidden';

  const restartGame = () => {
    props.newGame();
  }

  return(
    <div className={showModal}>
      <div className="modal-box">
        <span>{isGameComplete !== 'Draw'?`Player ${isGameComplete} wins!`:`${isGameComplete}!`}</span>
        <button className="restart-btn" onClick={restartGame}>New Game?</button>
      </div>
    </div>
  );
}

export default Modal;