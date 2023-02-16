import "./App.css";

import BaiTapRenderFilm from "./BaiTapRenderFilm/BaiTapRenderFilm";
import BaiTapThuKinh from "./BaitapThuKinh/BaiTapThuKinh";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import ChonXeNangCao from "./BaiTapChonXeNangCao/ChonXeNangCao";
function App() {
  return (
    <div className="App">
      {/* <BaiTapChonXe/>
      <BaiTapRenderFilm /> 
       <BaiTapThuKinh /> */}
      <ChonXeNangCao />
    </div>
  );
}

export default App;
