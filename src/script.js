import React from "react";
import { render } from "react-dom";
import "./style/style.css";
import Test from "./test";

const App = () => {
  return (
    <div>
      <Test />
    </div>
  );
};

render(<App />, document.getElementById("root"));
