import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="SRK"
        message="How are you?"
        timestamp="10 minutes ago"
        profilePic="https://www.koimoi.com/wp-content/new-galleries/2022/04/find-out-what-shah-rukh-khan-said-when-asked-about-posing-nude-for-a-billion-dollar-001.jpg"
      />
      <Chat
        name="Salman"
        message="What's Up?"
        timestamp="26 minutes ago"
        profilePic="https://image3.mouthshut.com/images/imagesp/925047023s.jpeg"
      />
      <Chat
        name="Amir"
        message="Hi"
        timestamp="42 minutes ago"
        profilePic="https://wallpaperaccess.com/full/1405490.jpg"
      />
    </div>
  );
}

export default Chats;
