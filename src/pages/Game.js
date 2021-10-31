import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

import Board from "../ components/Board";

const Game = () => {
  const history = useHistory();

  return (
    <div className="container">
      <h1>Game</h1>
      <Button
        variant="contained"
        className="easyBtn"
        sx={{
          "background-color": "#70B55C",
          "min-width": "12rem",
        }}
        onClick={() => history.push("/")}
      >
        main menu
      </Button>
      <Board />
    </div>
  );
};

export default Game;
