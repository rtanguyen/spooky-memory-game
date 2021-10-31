import React, { useState } from "react";
import { flip, shuffle } from "lodash";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ReactCardFlip from "react-card-flip";
import Cards from "./Cards";

import back from "../assets/images/back.png";
import moon from "../assets/images/moon.png";
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
  moon,
  candy,
  cauldron,
  frankenstein,
  ghost,
  hat,
  pumpkin,
  skull,
  tombstone,
  web,
  moon,
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

const shuffledCards = shuffle(imgArr);

const Board = () => {
  return (
    <div className="container board">
      {/* <div className="card"></div> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {shuffledCards.map((image, index) => (
            <Grid item xs={3}>
              <Cards key={index} image={shuffledCards} index={index} />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Board;
