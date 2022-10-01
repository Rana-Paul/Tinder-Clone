import React from "react";
import { IconButton } from "@mui/material";

import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import './SwipeButtons.css';

function SwipeButtons() {
  return (
    <div className="swipebuttons">
      <IconButton className="swipebuttons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
