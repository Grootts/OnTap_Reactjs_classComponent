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
            minHeight: "100px",
            padding: "10px",
            display: "flex",
          }}
        >
          <div style={{ backgroundColor: "#000", opacity: "0.9" }}>
            <img
              style={{ width: "100%", maxHeight: "300px" }}
              src={film.hinhAnh}
            />
            <h1 style={{ fontSize: "20px" }}>{film.tenPhim}</h1>
            <div style={{ height: "50px" }}>
              {film.moTa.length > 100 ? (
                <p>{film.moTa.substring(0, 100)}...</p>
              ) : (
                <p>{film.moTa}</p>
              )}
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
