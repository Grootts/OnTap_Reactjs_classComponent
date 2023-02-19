import React, { Component } from "react";
import "./ChonXeNangCao.css";
import arrFeatures from "../Data/arrayFeatures.json";
import arrWheels from "../Data/wheels.json";
export default class ChonXeNangCao extends Component {
  state = {
    currenCar: {
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
  newColor = (arrFeature) => {
    this.setState({
      currenCar: arrFeature,
    });
  };
  newWheel = (arrWheels) => {
    let obWheel = this.state.currenCar.wheels.find(
      (item) => item.idWheel === arrWheels.idWheel
    );
    if (obWheel !== -1) {
      this.setState({
        currenCar: { ...this.state.currenCar, srcImg: obWheel.srcImg },
      });
    }
  };
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
          key={index}
          onClick={() => {
            this.newWheel(arrWheel);
          }}
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
          key={index}
        >
          <img
            style={{
              with: "50px",
              height: "50px",
              paddingRight: "50px",
            }}
            src={arrFeature.img}
            onClick={() => {
              this.newColor(arrFeature);
            }}
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

            <h5>{arrFeature.type}</h5>
          </div>
        </div>
      );
    });
  };
  // componentDidMount = () => {
  //   let tagScript = document.createElement("script");
  //   tagScript.src =
  //     "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy";
  //   document.querySelector("#appendScript").appendChild(tagScript);
  // };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img
              src={this.state.currenCar.srcImg}
              style={{ width: "100%", height: "300px" }}
            />
            {/* <div style={{ width: "100%", height: "300px" }}>
              <div
                className="cloudimage-360"
                id="gurkha-suv"
                data-folder="./images/images-black/images-black-1"
                data-filename-x="civic-{index}.jpg"
                data-amount-x="8"
              ></div>
            </div>

            <div id="appendScript"></div> */}
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
