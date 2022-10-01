import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState();
  const [message, setMessage] = useState([
    {
      name: "SRK",
      img: "https://www.koimoi.com/wp-content/new-galleries/2022/04/find-out-what-shah-rukh-khan-said-when-asked-about-posing-nude-for-a-billion-dollar-001.jpg",
      message: "How are you?",
    },
    {
      name: "SRK",
      img: "https://www.koimoi.com/wp-content/new-galleries/2022/04/find-out-what-shah-rukh-khan-said-when-asked-about-posing-nude-for-a-billion-dollar-001.jpg",
      message: "What's Up?",
    },
    {
      message: "I'm fine",
    },
  ]);

  const send = (e) => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput("");
  };
  return (
    <>
      <div className="chatscreen">
        <p className="chatscreen__title">YOU MATCHED WITH SRK ON 1/10/22</p>
        {message.map((message) =>
          message.name ? (
            <div className="chatscreen__message">
              <Avatar className="chatscreen__image" src={message.img} />
              <p className="chatscreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatscreen__message">
              <p className="chatscreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>
      <div>
        <form className="chatscreen__input">
          <input
            className="chatscreen__inputField"
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button
            onClick={send}
            className="chatscreen__inputButton"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatScreen;
