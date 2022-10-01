import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        {backButton ? (
          <IconButton onClick={() => navigate(backButton, { replace: true })}>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
          </IconButton>
        ) : (
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        )}

        <Link to={"/"}>
          <img
            className="header__image"
            src="https://cdn-icons-png.flaticon.com/512/2504/2504943.png"
          />
        </Link>
        <Link to={"/chat"}>
          <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </>
  );
}

export default Header;
