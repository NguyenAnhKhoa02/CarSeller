import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "./FrontPage/Home";
import BookATestDrive from "./FrontPage/Cars/BookATestDrive";
import AllModels from "./FrontPage/Cars/AllModels";
import Versions from "./FrontPage/Cars/Versions";
import Price from "./FrontPage/Cars/Price";
import TryDriveSchedule from "./FrontPage/Cars/TryDriveSchedule";
import FleetSales from "./FrontPage/Offers/Fleetsales";
import Promotion from "./FrontPage/Offers/Promotion";
import GenuineUsedCarProgram from "./FrontPage/Offers/GenuineUsedCarProgram";
import GenuineAccessories from "./FrontPage/Offers/GenuineAccessories";
import Warranty from "./FrontPage/Services/Warranty";
import ExpressService from "./FrontPage/Services/ExpressService";
import Maintenance from "./FrontPage/Services/Maintenance";
import BookAService from "./FrontPage/Services/BookAService";
import SpareParts from "./FrontPage/Services/SpareParts";
import CompanyProfile from "./FrontPage/AboutUs/CompanyProfile";
import ContactUs from "./FrontPage/AboutUs/ContactUs";
import AppAdmin from "./Admin/AppAdmin";
import "./App.css";

function MainLayout() {
    return (
      <React.Fragment>
        <Container fluid className="MyContainer">
        <Navbar />
        <Outlet />
        <Footer />
        </Container>
      </React.Fragment>
    );
  }
  
function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="SanPham/DangKyLaiThu" element={<BookATestDrive />} />
                <Route path="SanPham/TatCaDongXe" element={<AllModels />} />
                <Route path="SanPham/TatCaXe/:id" element={<Versions />} />
                <Route path="SanPham/BangGia" element={<Price />} />
                <Route path="SanPham/LichLaiThu" element={<TryDriveSchedule />} />
                <Route path="MuaXe/BanHangDuAn" element={<FleetSales />} />
                <Route path="MuaXe/XeDaQuaSuDungChinhHang" element={<GenuineUsedCarProgram />} />
                <Route path="MuaXe/ChuongTrinhKhuyenMai" element={<Promotion />} />
                <Route path="MuaXe/PhuKienChinhHang" element={<GenuineAccessories />} />
                <Route path="DichVu/ChinhSachBaoHanh" element={<Warranty />} />
                <Route path="DichVu/BaoDuongNhanh" element={<ExpressService />} />
                <Route path="DichVu/CacHangMucBaoDuong" element={<Maintenance />} />
                <Route path="DichVu/ThongTinPhuTung" element={<SpareParts />} />
                <Route path="DichVu/DatLichDichVu" element={<BookAService />} />
                <Route path="VeChungToi/GioiThieuCongTy" element={<CompanyProfile />} />
                <Route path="VeChungToi/LienHe" element={<ContactUs />} />
            </Route>
            <Route path="/admin/*" element={<AppAdmin/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App