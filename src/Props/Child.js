import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { books } = this.props;
    let { name, age } = this.props.student;
    return (
      <div>
        <div>
          classComponent
          {books.map((sach, index) => {
            return <h1 key={index}>{sach}</h1>;
          })}
          <h2>{name}</h2>
          <h2>{age}</h2>
          <img
            src={this.props.srcImage}
            alt={this.props.srcImage}
            style={{ width: "300px", height: "100px" }}
          />
        </div>
      </div>
    );
  }
}
