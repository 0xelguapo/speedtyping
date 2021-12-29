import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import useWordGame from "./hooks/useWordGame.js";

function App() {
  
  const [
    typeText,
    textboxRef,
    handleChange,
    start,
    countdown,
    startGame,
    wordCount,
  ] = useWordGame(20);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!start}
        onChange={handleChange}
        value={typeText}
        ref={textboxRef}
      />
      <h4>Time reminaing: {countdown}</h4>
      <button disabled={start} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
