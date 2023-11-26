import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "./FrontPage/Home";
import BookATestDrive from "./FrontPage/Cars/BookATestDrive";
import Price from "./FrontPage/Cars/Price";
import FleetSales from "./FrontPage/Offers/Fleetsales";
import Promotion from "./FrontPage/Offers/Promotion";
import GenuineUsedCarProgram from "./FrontPage/Offers/GenuineUsedCarProgram";
import Warranty from "./FrontPage/Services/Warranty";
import ExpressService from "./FrontPage/Services/ExpressService";
import Maintenance from "./FrontPage/Services/Maintenance";
import BookAService from "./FrontPage/Services/BookAService";
import SpareParts from "./FrontPage/Services/SpareParts";
import CompanyProfile from "./FrontPage/AboutUs/CompanyProfile";
import ContactUs from "./FrontPage/AboutUs/ContactUs";
import Admin from "./Admin/AdminDashboard";
import "./App.css";

function MainLayout() {
    return (
      <React.Fragment>
        <Navbar />
        <Outlet />
        <Footer />
      </React.Fragment>
    );
  }
  
function App() {
return (
    <BrowserRouter>
        <Container fluid className="MyContainer">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="SanPham/DangKyLaiThu" element={<BookATestDrive />} />
                    <Route path="SanPham/BangGia" element={<Price />} />
                    <Route path="MuaXe/BanHangDuAn" element={<FleetSales />} />
                    <Route path="MuaXe/XeDaQuaSuDungChinhHang" element={<GenuineUsedCarProgram />} />
                    <Route path="MuaXe/ChuongTrinhKhuyenMai" element={<Promotion />} />
                    <Route path="DichVu/ChinhSachBaoHanh" element={<Warranty />} />
                    <Route path="DichVu/BaoDuongNhanh" element={<ExpressService />} />
                    <Route path="DichVu/CacHangMucBaoDuong" element={<Maintenance />} />
                    <Route path="DichVu/ThongTinPhuTung" element={<SpareParts />} />
                    <Route path="DichVu/DatLichDichVu" element={<BookAService />} />
                    <Route path="VeChungToi/GioiThieuCongTy" element={<CompanyProfile />} />
                    <Route path="VeChungToi/LienHe" element={<ContactUs />} />
                </Route>
                <Route path="/Admin" element={<Admin/>} />
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App