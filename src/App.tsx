import React from "react";

import "./App.css";
import "./styles/index.scss";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="outerContainer">
      <Header />
      <a href="https://www.freepik.com/free-vector/farmer-peasant-illustration-man-with-beard-spade-farmland_3264816.htm#page=2&query=farmer%20cartoon&position=31&from_view=keyword&track=ais">
        Image by vectorpouch
      </a>{" "}
      on Freepik
      <br></br>
      <a href="https://www.freepik.com/free-vector/smart-ecological-farming-cartoon-illustration_5901229.htm#query=farm&position=3&from_view=author">
        Image by vectorpouch
      </a>{" "}
      on Freepik
    </div>
  );
}

export default App;
