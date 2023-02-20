import React, { Component } from "react";
import Menu from "./Menu/Menu";
import DSFilm from "../Data/DataFilms.json";
export default class BaiTapRenderFilm extends Component {
  renderFilm = () => {
    let films = DSFilm.map((film) => {
      return (
        <div
          className="col-3"
          style={{
            width: "100px",
            minHeight: "200px",
            padding: "30px",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              opacity: "0.95",
              position: "relative",
              zIndex: "1",
              border: "2px solid black",
            }}
          >
            <img
              style={{ width: "100%", height: "400px" }}
              src={film.hinhAnh}
              alt=""
            />
            <div style={{ position: "absolute", top: "270px", zIndex: "5" }}>
              <h1
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {film.tenPhim}
              </h1>
              <div style={{ height: "50px", color: "white" }}>
                {film.moTa.length > 100 ? (
                  <p>{film.moTa.substring(0, 100)}...</p>
                ) : (
                  <p>{film.moTa}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return films;
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./background/avanger.jpg)",
          minHeight: "2000px",
        }}
      >
        <Menu />
        <div className="container-fluid">
          <div className="row">{this.renderFilm()}</div>
        </div>
      </div>
    );
  }
}
