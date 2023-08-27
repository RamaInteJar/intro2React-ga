import React from "react";

const Player = (props) => {
  const {whichPlayer} = props
  return (
    <div>
      <h2>Player {whichPlayer} </h2>
      <h3>Wins: </h3>
    </div>
  );
};

export default Player;
