import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    const MenuStyle = {
      width: "100%",
      backgroundColor: "#ededed",
      height: "55px",
      display: "flex",
      opacity: "0.9",
    };
    return (
      <div style={MenuStyle}>
        <h3
          style={{
            color: "black",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Cyberlearn Movie
        </h3>
        <a
          style={{
            color: "black",

            padding: "15px",
            cursor: "pointer",
          }}
        >
          Home
        </a>
        <a
          style={{
            color: "black",
            padding: "15px",
            cursor: "pointer",
          }}
        >
          Link
        </a>
      </div>
    );
  }
}
