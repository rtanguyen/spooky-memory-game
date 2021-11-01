import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Tada from "react-reveal/Tada";

import back from "../assets/images/back.png";

const Cards = (props) => {
  const { card, index, name, pickedCard, solved, noMatch, matchCounter } =
    props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [tada, setTada] = useState(false);
  const [click, setClick] = useState(true);

  //disable click for matched cards
  useEffect(() => {
    if (solved.includes(index)) {
      setClick(false);
    }
  }, [solved]);

  //turn cards face down if incorrect
  useEffect(() => {
    if (noMatch.includes(name)) {
      setTimeout(() => setIsFlipped(false), 800);
    }
  }, [noMatch]);

  useEffect(() => {
    if (matchCounter === 8) {
      setTada(true);
    }
  }, [matchCounter]);

  const handleClick = (e) => {
    e.preventDefault();
    const value = pickedCard(name, index);
    if (value !== null || value !== undefined) {
      setIsFlipped(true);
    }
  };

  return (
    <Tada spy={tada}>
      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        className="card"
      >
        <div className="mt-3 card back" onClick={click ? handleClick : null}>
          <img src={back} />
        </div>
        <div className="mt-3 card front" onClick={click ? handleClick : null}>
          <img src={card} />
        </div>
      </ReactCardFlip>
    </Tada>
  );
};

export default Cards;
