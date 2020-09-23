import React from "react";
import { render } from "react-dom";
import "./style/style.css";
// import TheApp from "./assets/the_app.js";
import Header from "./assets/header.js";
import TDL from "./assets/tdlist.js";

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <TDL />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
