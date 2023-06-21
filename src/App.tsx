import React from "react";
import "./styles/index.scss";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

function App() {
  return (
    <div className="outerContainer">
      <Header />
      <Content />
      <a href="https://www.freepik.com/free-vector/smart-ecological-farming-cartoon-illustration_5901229.htm#query=farm&position=3&from_view=author">
        Image by vectorpouch
      </a>{" "}
      on Freepik
      <br />
      <a href="https://www.freepik.com/free-vector/investment-tree-growth-illustration_3090797.htm#query=farm&position=41&from_view=author">
        Image by vectorpouch
      </a>{" "}
      on Freepik
    </div>
  );
}

export default App;
