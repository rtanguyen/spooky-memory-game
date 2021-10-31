import React, { useState } from "react";
import { flip, shuffle } from "lodash";

import "./App.css";
import Board from "./ components/Board";

function App() {
  const [matchCounter, setMatchedCounter] = useState(0);
  const [attempts, setAttempts] = useState(8);

  return (
    <div className="App container">
      <h1 className="header">SUPER SPOOKY MEMORY GAME</h1>
      <Board
        matchCounter={matchCounter}
        setMatchedCounter={setMatchedCounter}
        attempts={attempts}
        setAttempts={setAttempts}
      />
    </div>
  );
}

export default App;
