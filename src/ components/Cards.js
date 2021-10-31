import React, { useState, Component } from "react";
import { flip, shuffle } from "lodash";
import ReactCardFlip from "react-card-flip";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import back from "../assets/images/back.png";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.cardClick = this.cardClick.bind(this);
  }

  cardClick(e) {
    e.preventDefault();
    console.log(this);
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    const { image, index } = this.props;
    return (
      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={this.state.isFlipped}
      >
        <div className="mt-3 card back" onClick={this.cardClick}>
          <img src={back} />
        </div>
        <div
          className="mt-3 card front"
          onClick={this.cardClick}
          style={{ backgroundImage: { image } }}
        >
          <img src={image[index]} />
        </div>
      </ReactCardFlip>
    );
  }
}

export default Cards;
