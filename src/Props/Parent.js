import React, { Component } from "react";
import Child from "./Child";
import FunctionComponent from "./FunctionComponent";

export default class Parent extends Component {
  src = "./glassesImage/background.jpg";
  student = {
    name: "Phong",
    age: 28,
    sach: ["Toán", "Ngữ văn", "Lịch sử"],
  };
  sach = ["Toán", "Ngữ văn", "Lịch sử"];
  render() {
    return (
      <div>
        {" "}
        <Child srcImage={this.src} student={this.student} books={this.sach} />
        <FunctionComponent srcImage={this.src} student={this.student} />
      </div>
    );
  }
}
