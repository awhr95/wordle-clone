import React from "react";
import "../styles/Row.scss";

export default function Wordle({
  word,
  markAsSolution,
  markPresentAndAbsentLetters,
  solution,
  bounceOnError,
}) {
  return (
    <div className={`row ${bounceOnError && "row--bounce"}`}>
      {word.split("").map((letter, index) => {
        const bgClass = solution.includes(letter) ? "present" : "absent";

        return (
          <div
            className={`letter ${
              markAsSolution && `correct rotate--${index + 1}00`
            } ${
              markPresentAndAbsentLetters && `${bgClass} rotate--${index + 1}00`
            } ${letter !== " " && "letter--active"} ${
              solution[index] === letter && "correct"
            }`}
            key={index}
          >
            {letter}
            <div className="back">{letter}</div>
          </div>
        );
      })}
    </div>
  );
}
