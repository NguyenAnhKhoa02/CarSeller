import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AdminNavbar from "../Components/Admin/Sidebar";
import Home from "./FrontPage/Home";
import BookATestDrive from "./FrontPage/Cars/BookATestDrive";
import AllProduct from "./FrontPage/Cars/AllProduct";
import Product from "./FrontPage/Cars/Product";
import FleetSales from "./FrontPage/Offers/Fleetsales";
import Promotion from "./FrontPage/Offers/Promotion";
import GenuineUsedCarProgram from "./FrontPage/Offers/GenuineUsedCarProgram";
import Warranty from "./FrontPage/Services/Warranty";
import ExpressService from "./FrontPage/Services/ExpressService";
import Maintenance from "./FrontPage/Services/Maintenance";
import BookAService from "./FrontPage/Services/BookAService";
import SpareParts from "./FrontPage/Services/SpareParts";
import Dashboard from "./Admin/Dashboard";
import ServiceSchedule from "./Admin/ServiceSchedule";
import Cars from "./Admin/Cars";
import TestingRegister from "./Admin/TestingRegister"
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
function AdminLayout() {
  return (
    <React.Fragment>
      <AdminNavbar/>
      <Outlet/>
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
                    <Route path="SanPham/TatCaDongXe" element={<AllProduct />} />
                    <Route path="SanPham/Xe" element={<Product />} />
                    <Route path="MuaXe/BanHangDuAn" element={<FleetSales />} />
                    <Route path="MuaXe/XeDaQuaSuDungChinhHang" element={<GenuineUsedCarProgram />} />
                    <Route path="MuaXe/ChuongTrinhKhuyenMai" element={<Promotion />} />
                    <Route path="DichVu/ChinhSachBaoHanh" element={<Warranty />} />
                    <Route path="DichVu/BaoDuongNhanh" element={<ExpressService />} />
                    <Route path="DichVu/CacHangMucBaoDuong" element={<Maintenance />} />
                    <Route path="DichVu/ThongTinPhuTung" element={<SpareParts />} />
                    <Route path="DichVu/DatLichDichVu" element={<BookAService />} />
                </Route>
                <Route element={<AdminLayout />}>
                  <Route path="/admin/Dashboard" element={<Dashboard/>} />
                  <Route path="/admin/DangKyLaiThu" element={<TestingRegister/>} />
                  <Route path="/admin/LichDichVu" element={<ServiceSchedule/>} />
                  <Route path="/admin/Xe" element={<Cars/>} />
                </Route>
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App