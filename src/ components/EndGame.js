import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EndGame = (props) => {
  const { matchCounter, attempts } = props;
  const [open, setOpen] = useState(false);
  const [gameStatus, setGameStatus] = useState();

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    if (matchCounter === 8) {
      setGameStatus("You won!");
      setTimeout(() => setOpen(true), 800);
    }
  }, [matchCounter]);

  useEffect(() => {
    if (attempts === 0) {
      setGameStatus("Yikes, better luck next time!");
      setTimeout(() => setOpen(true), 800);
    }
  }, [attempts]);

  const handleClose = () => {
    window.location.reload();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="pb-3"
        >
          {gameStatus}
        </Typography>
        <Button variant="outlined" size="small" onClick={handleClose}>
          Play Again
        </Button>
      </Box>
    </Modal>
  );
};
export default EndGame;
