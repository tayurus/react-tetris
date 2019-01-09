import React from "react";
import "./ScoreBoard.css";
export const ScoreBoard = props => {
  return (
    <div className="ScoreBoard">
      <h2 className="ScoreBoard__title">Score: {props.score}</h2>
    </div>
  );
};

ScoreBoard.defaultProps = {
  className: ""
};
