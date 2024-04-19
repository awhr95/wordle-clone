import React, { useState, useRef, useEffect } from "react";
import "../styles/Wordle.scss";
import Row from "./Row";
import Keyboard from "./Keyboard";

const SOLUTION = "table";

export default function Wordle() {
  const [geusses, setGuesses] = useState([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
  ]);

  const wordleRef = useRef();

  useEffect(() => {
    wordleRef.current.focus();
  }, []);

  const handleKeyDown = () => {};

  return (
    <div
      className="wordle"
      ref={wordleRef}
      tabIndex="0"
      onBlur={(e) => {
        e.target.focus();
      }}
      onKeyDown={handleKeyDown}
    >
      <h1 className="title">Wordle Clone</h1>
      <div className="notification"></div>
      {geusses.map((guess, index) => {
        return <Row key={index} word={guess} />;
      })}
    </div>
  );
}
