import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={require("../assets/CarBasic/products/black-car.jpg")}
              alt=""
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div className="row border border-link pt-2 pb-2">
                  <img
                    className="col-2"
                    src={require("../assets/CarBasic/icons/icon-black.jpg")}
                    style={{ left: "12px" }}
                    alt=""
                  />
                  <div className="col-6">
                    <h3>Black</h3>
                    <h5>Pearl</h5>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2">
                  <img
                    className="col-2"
                    src={require("../assets/CarBasic/icons/icon-red.jpg")}
                    style={{ left: "12px" }}
                    alt=""
                  />
                  <div className="col-6">
                    <h3>Red</h3>
                    <h5>Pearl</h5>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2">
                  <img
                    className="col-2"
                    src={require("../assets/CarBasic/icons/icon-silver.jpg")}
                    style={{ left: "12px" }}
                    alt=""
                  />
                  <div className="col-6">
                    <h3>Silver</h3>
                    <h5>Pearl</h5>
                  </div>
                </div>
                <div className="row border border-dark">
                  <img
                    className="col-2"
                    src={require("../assets/CarBasic/icons/icon-steel.jpg")}
                    style={{ left: "12px" }}
                    alt=""
                  />
                  <div className="col-6">
                    <h3>Steel</h3>
                    <h5>Pearl</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
