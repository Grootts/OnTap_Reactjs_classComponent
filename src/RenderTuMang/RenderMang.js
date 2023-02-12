import React, { Component } from "react";

export default class RenderMang extends Component {
  productList = [
    { id: 1, name: "black", img: "./carbasics/icon-black.jpg" },
    { id: 2, name: "red", img: "./carbasics/icon-red.jpg" },
    { id: 3, name: "silver", img: "./carbasics/icon-silver.jpg" },
    { id: 4, name: "steel", img: "./carbasics/icon-steel.jpg" },
  ];
  RenderMang = () => {
    let mauXe = this.productList.map((xe, index) => {
      return (
        <tr key={index}>
          <td>{xe.id}</td>
          <td>{xe.name}</td>
          <td>
            <img src={xe.img} />
          </td>
        </tr>
      );
    });
    return mauXe;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.RenderMang()}</tbody>
        </table>
      </div>
    );
  }
}
