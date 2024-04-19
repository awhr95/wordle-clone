import React from "react";

export default function Wordle({ word }) {
  return (
    <div>
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
