import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

import bat from "../assets/images/BAT2.png";
import candy from "../assets/images/candy.png";
import cauldron from "../assets/images/cauldron.png";
import frankenstein from "../assets/images/frankenstein.png";
import ghost from "../assets/images/ghost2.png";
import hat from "../assets/images/hat.png";
import pumpkin from "../assets/images/pumpkin.png";
import skull from "../assets/images/skull.png";
import tombstone from "../assets/images/tombstone.png";
import web from "../assets/images/web.png";

const imgArr = [
  bat,
  candy,
  cauldron,
  frankenstein,
  ghost,
  hat,
  pumpkin,
  skull,
  tombstone,
  web,
];

const Start = () => {
  const history = useHistory();
  // const [level, setLevel] = useState();
  // const [cardsArr, setCardsArr] = useState(imgArr);

  return (
    <div className="container">
      <Button
        variant="contained"
        className="easyBtn"
        sx={{
          "background-color": "#70B55C",
          "min-width": "12rem",
        }}
        onClick={() => history.push("/game")}
      >
        Easy
      </Button>
      <Button
        variant="contained"
        className="medBtn"
        sx={{
          "background-color": "#5C91AD",
          "min-width": "12rem",
        }}
        onClick={() => history.push("/game")}
      >
        Normal
      </Button>
      <Button
        variant="contained"
        className="hardBtn"
        sx={{
          "background-color": "#CF4C2B",
          "min-width": "12rem",
        }}
        onClick={() => history.push("/game")}
      >
        Hard
      </Button>
    </div>
  );
};

export default Start;
