import React, { useState, useEffect } from "react";
import { flip, shuffle } from "lodash";
import ReactCardFlip from "react-card-flip";
import Tada from "react-reveal/Tada";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import back from "../assets/images/back.png";

const Cards = (props) => {
  const {
    key,
    card,
    index,
    name,
    pickedCard,
    solved,
    wrongGuess,
    matchCounter,
  } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [click, setClick] = useState(true);
  const [tada, setTada] = useState(false);

  useEffect(() => {
    if (wrongGuess.includes(name)) {
      setTimeout(() => setIsFlipped(false), 800);
    }
  }, [wrongGuess]);

  useEffect(() => {
    if (solved.includes(index)) {
      setClick(false);
    }
  }, [solved]);

  useEffect(() => {
    console.log("u won");

    if (matchCounter === 8) {
      setTada(true);
    }
  }, [matchCounter]);

  const handleClick = (e) => {
    e.preventDefault();
    const value = pickedCard(name, index);
    if (value !== null) {
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
// class Cards extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isFlipped: false,
//       found: false,
//     };
//     this.cardClick = this.cardClick.bind(this);
//   }
//   cardClick(e) {
//     e.preventDefault();
//     this.setState({ isFlipped: !this.state.isFlipped });
//     console.log(this);
//   }

//   render() {
//     const { card } = this.props;
//     return (
//       <ReactCardFlip
//         flipDirection="horizontal"
//         isFlipped={this.state.isFlipped}
//         className="card"
//       >
//         <div className="mt-3 card back" onClick={this.cardClick}>
//           <img src={back} />
//         </div>
//         <div
//           className="mt-3 card front"
//           onClick={this.cardClick}
//           style={{ backgroundImage: { card } }}
//         >
//           <img src={card} />
//         </div>
//       </ReactCardFlip>
//     );
//   }
// }

export default Cards;
