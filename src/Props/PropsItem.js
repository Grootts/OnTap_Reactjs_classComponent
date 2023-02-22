import React, { Component } from "react";

export default class PropsItem extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            border: "1px solid black",
            textAlign: "start",
            margin: "20px",
            width: "200px",
          }}
        >
          <img
            src={this.props.itemProps.img}
            style={{ width: "100px", height: "100px", margin: "10px" }}
          />
          <h3>{this.props.itemProps.title}</h3>
          <div>{this.props.itemProps.price}</div>
          <button style={{ width: "100px", height: "30px", margin: "20px" }}>
            Detail
          </button>
        </div>
      </div>
    );
  }
}
