import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav-left">
          <img
            src={require("../images/TrollFace.png")}
            alt="TrollFace"
            className="trollFace"
          />
          <h1>Meme Generator</h1>
        </div>
        <h3>React Course Project 3</h3>
      </div>
    </div>
  );
}
