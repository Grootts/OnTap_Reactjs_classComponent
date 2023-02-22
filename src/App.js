import "./App.css";

import BaiTapRenderFilm from "./BaiTapRenderFilm/BaiTapRenderFilm";
import BaiTapThuKinh from "./BaitapThuKinh/BaiTapThuKinh";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import ChonXeNangCao from "./BaiTapChonXeNangCao/ChonXeNangCao";
import DemoProps from "./Props/DemoProps";
import PropsList from "./Props/PropsList";
import dataProduct from "./Data/arrayFeatures.json";
import { useState } from "react";
function App() {
  const [home, setHome] = useState(false);

  const handleClickHome = () => {
    setHome(true);
  };
  const handleClickShop = () => {
    setHome(false);
  };
  return (
    <div className="App">
      {/* <BaiTapChonXe/>
      <BaiTapRenderFilm /> 
       <BaiTapThuKinh />
      <ChonXeNangCao />
      <DemoProps /> */}
      <div>
        <button
          className="button"
          onClick={handleClickHome}
          style={{
            display: "flex",
            marginTop: "200px",
            position: "absolute",
            width: "180px",
            backgroundColor: "white",
          }}
        >
          Home
        </button>

        {home && (
          <div
            style={{
              width: "1000px",
              height: "100%",
              marginLeft: "20%",
              position: "absolute",
            }}
          >
            <PropsList arrayProduct={dataProduct} />
          </div>
        )}
      </div>
      <div>
        <button
          className="button"
          onClick={handleClickShop}
          style={{
            display: "flex",
            marginTop: "230px",
            position: "absolute",
            width: "180px",
            backgroundColor: "white",
          }}
        >
          Shop
        </button>
      </div>
    </div>
  );
}

export default App;
