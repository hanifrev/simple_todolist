import TheApp from "./the_app.js";
import React from "react";
export default function TDL({ props }) {
  return (
    <div className="tdl-form">
      <div className="dialog-box">
        <input className="input-form"></input>
        <button className="thebutton">Add to the list</button>
      </div>
    </div>
  );
}
