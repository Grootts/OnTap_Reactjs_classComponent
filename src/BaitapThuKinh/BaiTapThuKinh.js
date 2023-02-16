import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
export default class BaiTapThuKinh extends Component {
  state = {
    glasses: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  targetGlasses = (dataGlasse) => {
    this.setState({
      glasses: dataGlasse,
    });
  };
  renderGlasses = () => {
    return dataGlasses.map((dataGlasse) => (
      <img
        style={{
          width: "80px",
          height: "50px",
          margin: "20px",
          cursor: "pointer",
          border: "1px solid black",
        }}
        src={dataGlasse.url}
        onClick={() => {
          this.targetGlasses(dataGlasse);
        }}
      />
    ));
  };
  render() {
    const keyFrame = `@keyframes animChangeGlasses${Date.now()}{
        from{
            width:0
        }
        to{
            width:200px
        }
    }`;
    const keyFrame2 = `@keyframes animChangeGlasses2${Date.now()}{
        from{
            height:0
        }
        to{
            height:50px
        }
    }`;
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg",
          minHeight: "1000px",
          backgroundSize: "1300px",
          border: "2px solid black",
        }}
      >
        <style>{keyFrame}</style>
        <style>{keyFrame2}</style>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: "1000px" }}
        >
          <h2 style={{ textAlign: "center", color: "white" }}>
            TRY GLASSES ONLINE
          </h2>
          <div className="container-fluid">
            <div className="row" style={{ display: "flex" }}>
              <div style={{ position: "relative" }} className="col-3">
                <img
                  style={{
                    width: "300px",
                    height: "270px",
                    position: "absolute",
                  }}
                  src="./glassesImage/model.jpg"
                />
                <img
                  style={{
                    position: "absolute",
                    width: "185px",
                    height: "50px",
                    margin: "63px",
                    left: "150px",
                    animation: `animChangeGlasses${Date.now()} 1s `,
                    opacity: "0.7",
                  }}
                  src={this.state.glasses.url}
                />
                <div
                  style={{
                    position: "relative",
                    color: "black",
                    left: "150px",
                    marginBlockStart: "185px",
                    backgroundColor: "rbga(0,0,0,0.7)",
                    textAlign: "start",
                    width: "300px",
                  }}
                >
                  <p>Name:{this.state.glasses.name}</p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "270px",
                      overflow: "hidden",
                      wordWrap: "normal",
                    }}
                  >
                    Title:{this.state.glasses.desc}
                  </p>
                </div>
              </div>
              <div style={{ position: "relative" }} className="col-9">
                <style>{keyFrame}</style>
                <img
                  style={{
                    width: "300px",
                    height: "270px",
                    position: "absolute",
                    border: "2px solid black",
                  }}
                  src="./glassesImage/model.jpg"
                />
                <img
                  style={{
                    position: "absolute",
                    width: "185px",
                    height: "50px",
                    margin: "8px",
                    top: "55px",
                    left: "523px",
                    animation: `animChangeGlasses2${Date.now()} 1s `,
                    opacity: "0.7",
                  }}
                  src={this.state.glasses.url}
                />
                <div
                  style={{
                    position: "relative",
                    color: "black",
                    left: "466px",
                    marginBlockStart: "185px",
                    backgroundColor: "rbga(0,0,0,0.7)",
                    textAlign: "start",
                    width: "300px",
                  }}
                >
                  <p>Name:{this.state.glasses.name}</p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "270px",
                      overflow: "hidden",
                      wordWrap: "normal",
                    }}
                  >
                    Title:{this.state.glasses.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "wheat",
              margin: "20px",
            }}
          >
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
