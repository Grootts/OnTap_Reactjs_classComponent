import React, { Component } from "react";
import PropsItem from "./PropsItem";

export default class PropsList extends Component {
  handleListItem = () => {
    return this.props.arrayProduct.map((item, index) => {
      return (
        <div key={index}>
          <PropsItem itemProps={item} />;
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {this.handleListItem()}
      </div>
    );
  }
}
