import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
          <Route
              path="/chat/:person"
              element={
                <>
                  <Header backButton="/chat"/>
                  
                  <ChatScreen />
                </>
              }
            />
            <Route
              path="/chat"
              element={
                <>
                  <Header backButton="/"/>
                  <Chats />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <TinderCards />
                  <SwipeButtons />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
