import React, { useEffect, useState } from "react";
import { flip, shuffle } from "lodash";
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

const Board = (props) => {
  const { matchCounter, setMatchedCounter, attempts, setAttempts } = props;
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [solved, setSolved] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  // const [matchCounter, setMatchedCounter] = useState(0);
  // const [lives, setLives] = useState(5);

  //check match if change made to second card
  useEffect(() => {
    checkMatch();
  }, [secondCard]);

  const pickedCard = (name, index) => {
    if (firstCard.index === index) {
      return;
    } else if (!firstCard.name) {
      setFirstCard({ name, index });
      console.log(firstCard);
    } else if (!secondCard.name && firstCard.index !== index) {
      setSecondCard({ name, index });
      console.log(secondCard);
    }
    return;
  };

  console.log(solved);

  const checkMatch = () => {
    console.log("check");
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? solvedCards() : noMatch();
    }
  };

  const solvedCards = () => {
    setSolved([firstCard.index, secondCard.index]);
    setMatchedCounter(matchCounter + 1);
    reset();
  };

  const noMatch = () => {
    setWrongGuess([firstCard.name, secondCard.name]);
    setAttempts(attempts - 1);
    reset();
  };

  // console.log(matchCounter, attempts);
  const reset = () => {
    // } else {
    setFirstCard({});
    setSecondCard({});
    // }
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
                wrongGuess={wrongGuess}
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
