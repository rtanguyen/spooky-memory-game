import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Cards from "./Cards";
import EndGame from "./EndGame";

//import images and shuffle
import images from "../assets/images/images";
let imagesArr = [];
for (let i = 0; i < 2; i++) {
  for (let obj in images) {
    imagesArr.push(images[obj]);
  }
}
const shuffledCards = shuffle(imagesArr);

const Board = () => {
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [solved, setSolved] = useState([]);
  const [noMatch, setNoMatch] = useState([]);

  //track game stats
  const [matchCounter, setMatchedCounter] = useState(0);
  const [attempts, setAttempts] = useState(8);

  const pickedCard = (name, index) => {
    if (firstCard.index === index) {
      return;
    } else if (!firstCard.name) {
      setFirstCard({ name, index });
    } else if (!secondCard.name && firstCard.index !== index) {
      setSecondCard({ name, index });
    }
    return;
  };

  //check match if change made to second card
  useEffect(() => {
    checkMatch();
  }, [secondCard]);

  const checkMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? solvedCards() : incorrectCards();
    }
  };

  //update state for matched cards' indexes. used to 'disable' clicking card
  const solvedCards = () => {
    setSolved([firstCard.index, secondCard.index]);
    setMatchedCounter(matchCounter + 1);
    reset();
  };

  //update state if cards do not match to flip cards facedown
  const incorrectCards = () => {
    setNoMatch([firstCard.name, secondCard.name]);
    setAttempts(attempts - 1);
    reset();
  };

  const reset = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <div className="container board">
      <Box sx={{ flexGrow: 1 }}>
        <h3 className="lives pb-3">REMAINING ATTEMPTS: {attempts} </h3>
        <Grid container spacing={1}>
          {shuffledCards.map((card, index) => (
            <Grid item xs={3}>
              <Cards
                key={index}
                card={card["path"]}
                index={index}
                name={card["name"]}
                pickedCard={pickedCard}
                solved={solved}
                noMatch={noMatch}
                matchCounter={matchCounter}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <EndGame matchCounter={matchCounter} attempts={attempts} />
    </div>
  );
};

export default Board;
