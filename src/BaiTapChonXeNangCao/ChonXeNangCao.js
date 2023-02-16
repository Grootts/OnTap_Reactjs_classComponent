import React, { Component } from "react";
import "./ChonXeNangCao.css";
import arrFeatures from "../Data/arrayFeatures.json";
import arrWheels from "../Data/wheels.json";
export default class ChonXeNangCao extends Component {
  renderWheels = () => {
    return arrWheels.map((arrWheel, index) => {
      return (
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: "10px",
            margin: "7px",
            alignItems: "center",
          }}
          className="item"
        >
          <img
            style={{
              with: "50px",
              height: "50px",
              paddingRight: "50px",
            }}
            src={arrWheel.img}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
            className="nameItem"
          >
            <h5>{arrWheel.title}</h5>
          </div>
        </div>
      );
    });
  };
  renderColor = () => {
    return arrFeatures.map((arrFeature, index) => {
      return (
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: "10px",
            margin: "7px",
            alignItems: "center",
          }}
          className="item"
        >
          <img
            style={{
              with: "50px",
              height: "50px",
              paddingRight: "50px",
            }}
            src={arrFeature.img}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
            className="nameItem"
          >
            <h5>{arrFeature.title}</h5>

            <h7>{arrFeature.type}</h7>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img
              style={{
                width: "97%",
                height: "300px",
              }}
              src="./carbasics/black-car.jpg"
            />
            <div style={{ margin: "10px" }}>
              <div
                style={{
                  backgroundColor: "#e5e5e5",
                  width: "100%",
                  height: "30px",
                  border: "1px solid #797575",
                }}
              >
                Exterior color
              </div>
              <table border="1px" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>Black</th>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <th>10,000,000$</th>
                  </tr>
                  <tr>
                    <th>Enginer</th>
                    <th>In-line-4-cylinder</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          <div
            style={{
              height: "370px",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
            className="col-5"
          >
            <div
              style={{
                border: "1px solid #797575",
                height: "370px",
                width: "632px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e5e5e5",
                  width: "630px",
                  height: "30px",
                  border: "1px solid #797575",
                }}
              >
                Exterior color
              </div>
              {this.renderColor()}
            </div>
            <div
              style={{
                border: "1px solid #797575",
                height: "285px",
                width: "632px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e5e5e5",
                  width: "630px",
                  height: "30px",
                  border: "1px solid #797575",
                }}
              >
                Wheels
              </div>
              {this.renderWheels()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
