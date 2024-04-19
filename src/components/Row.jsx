import React from "react";
import "../styles/Row.scss";

export default function Wordle({ word }) {
  return (
    <div className="row">
      {word.split("").map((letter, index) => {
        return (
          <div className="letter" key={index}>
            {letter}
            <div className="back">{letter}</div>
          </div>
        );
      })}
    </div>
  );
}
