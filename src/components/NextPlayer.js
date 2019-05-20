import React from 'react';
import '../styles/NextPlayer.css'

const NextPlayer = props => {
  return(
    <div className="next-player--container">
      <span>Player <span className="next-player--text">{!props.xNextTic?'o':'x'}'s</span> turn</span>
    </div>
  );
};

export default NextPlayer;