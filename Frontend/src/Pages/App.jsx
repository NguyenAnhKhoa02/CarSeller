import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "./FrontPage/Home";
import BookATestDrive from "./FrontPage/Cars/BookATestDrive";
import FleetSales from "./FrontPage/Offers/Fleetsales";
import Promotion from "./FrontPage/Offers/Promotion";
import GenuineUsedCarProgram from "./FrontPage/Offers/GenuineUsedCarProgram";
import GenuineAccessories from "./FrontPage/Offers/GenuineAccessories";
import Warranty from "./FrontPage/Services/Warranty";
import ExpressService from "./FrontPage/Services/ExpressService";
import Maintenance from "./FrontPage/Services/Maintenance";
import BookAService from "./FrontPage/Services/BookAService";
import TryDriveSchedule from "./FrontPage/Cars/TryDriveSchedule";
import SpareParts from "./FrontPage/Services/SpareParts";
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
                    <Route path="MuaXe/BanHangDuAn" element={<FleetSales />} />
                    <Route path="MuaXe/XeDaQuaSuDungChinhHang" element={<GenuineUsedCarProgram />} />
                    <Route path="MuaXe/PhuKienChinhHang" element={<GenuineAccessories />} />
                    <Route path="MuaXe/ChuongTrinhKhuyenMai" element={<Promotion />} />
                    <Route path="DichVu/ChinhSachBaoHanh" element={<Warranty />} />
                    <Route path="DichVu/BaoDuongNhanh" element={<ExpressService />} />
                    <Route path="DichVu/CacHangMucBaoDuong" element={<Maintenance />} />
                    <Route path="DichVu/ThongTinPhuTung" element={<SpareParts />} />
                    <Route path="DichVu/DatLichDichVu" element={<BookAService />} />
                    <Route path="SanPham/LichLaiThu" element={<TryDriveSchedule />} />
                </Route>
                <Route path="/Admin" element={<Admin/>} />
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App