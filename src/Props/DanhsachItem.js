import React, { Component } from "react";
import Items from "../Data/arrayFeatures.json";
export default class DanhsachItem extends Component {
  state = {
    oto: {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "./images/images-black/images-black-1/civic-1.jpg",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images/images-black/images-black-1/civic-1.jpg",
        },
        {
          idWheel: 2,
          srcImg: "images/images-black/images-black-2/civic-1.jpg",
        },
        {
          idWheel: 3,
          srcImg: "images/images-black/images-black-3/civic-1.jpg",
        },
      ],
    },
  };
  handleClickItem = (itemChon) => {
    this.setState({
      oto: itemChon,
    });
  };
  renderItem = () => {
    return Items.map((item, index) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          key={index}
        >
          <div
            style={{
              border: "1px solid black",
              width: "250px",
              height: "300px",
              margin: "20px",
            }}
          >
            <img
              src={item.srcImg}
              style={{ width: "100%", height: "200px" }}
              alt=""
            />
            <div style={{ fontSize: "17px", fontWeight: "bold" }}>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <button
              onClick={() => {
                this.handleClickItem(item);
              }}
              style={{ margin: "10px" }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      );
    });
  };
  renderInformationItem = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          <h3>Sản Phẩm</h3>
          <img
            src={this.state.oto.srcImg}
            style={{ width: "200px", height: "160px" }}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
          }}
        >
          <h3>Thông số kỹ thuật</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>{this.state.oto.title}</th>
              </tr>
              <tr>
                <th>Price</th>
                <th>{this.state.oto.price}</th>
              </tr>
              <tr>
                <th>Engine Type</th>
                <th>{this.state.oto.engineType}</th>
              </tr>
              <tr>
                <th>Displacement</th>
                <th>{this.state.oto.displacement}</th>
              </tr>
              <tr>
                <th>Horsepower</th>
                <th>{this.state.oto.horsepower}</th>
              </tr>
              <tr>
                <th>Torque</th>
                <th>{this.state.oto.torque}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>{this.renderItem()}</div>

        <div>{this.renderInformationItem()}</div>
      </div>
    );
  }
}
