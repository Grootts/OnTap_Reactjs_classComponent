import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    const MenuStyle = {
      width: "100%",
      backgroundColor: "#323232",
      height: "50px",
      display: "flex",
      opacity: "0.9",
    };
    return (
      <div style={MenuStyle}>
        <h3
          style={{
            color: "black",
            padding: "10px",
          }}
        >
          Cyberlearn Movie
        </h3>
        <a
          style={{
            color: "black",

            padding: "15px",
          }}
        >
          Home
        </a>
        <a
          style={{
            color: "black",
            padding: "15px",
          }}
        >
          Link
        </a>
      </div>
    );
  }
}
