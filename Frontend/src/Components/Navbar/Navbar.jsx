import {Row, Col, Nav,Navbar,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom";
import Logo from "../Assets/Logo.png"
import top1 from "../Assets/top1.png" 
import top2 from "../Assets/top2.png" 
import top3 from "../Assets/top3.png" 
import top4 from "../Assets/top4.png" 
import "./Navbar.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Link to=""> 
      <Navbar.Brand style={{paddingLeft:"25px"}}>
        <img
          src={Logo}
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Mitsubishi"
        />
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="SẢN PHẨM" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/SanPham/TatCaDongXe">Tất cả dòng xe</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/SanPham/DangKyLaiThu">Đăng ký lái thử</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/SanPham/LichLaiThu">Lịch lái thử</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/SanPham/BangGia">Bảng giá</Link>
          </NavDropdown>
          <NavDropdown title="MUA XE" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/MuaXe/ChuongTrinhKhuyenMai">Chương trình khuyến mãi</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/MuaXe/PhuKienChinhHang">Phụ kiện chính hãng</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/MuaXe/BanHangDuAn">Bán hàng dự án</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/MuaXe/XeDaQuaSuDungChinhHang">Xe đã qua sử dụng chính hãng</Link>
          </NavDropdown>
          <NavDropdown title="DỊCH VỤ" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/DichVu/ChinhSachBaoHanh">Chính sách bảo hành</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/DichVu/BaoDuongNhanh">Bảo dưỡng nhanh</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/DichVu/CacHangMucBaoDuong">Các hạng mục bảo dưỡng</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/DichVu/ThongTinPhuTung">Thông tin phụ tùng</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/DichVu/DatLichDichVu">Đặt lịch dịch vụ</Link>
          </NavDropdown>
          <NavDropdown title="VỀ CHÚNG TÔI" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/VeChungToi/GioiThieuCongTy">Giới thiệu công ty</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/VeChungToi/LienHe">Liên hệ</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <div className="top">
          <Row>
            <Col md="auto">
              <Navbar.Text>
                <img src={top1} style={{marginRight: "5px"}}/>
                <Link to="/SanPham/LichLaiThu" className="toptext">Lịch lái thử</Link>
              </Navbar.Text>
            </Col>
            <Col md="auto">
              <Navbar.Text>
                <img src={top2} style={{marginRight: "5px"}}/>
                <Link to="/SanPham/BangGia" className="toptext">Bảng giá</Link>
              </Navbar.Text>
            </Col>
            <Col md="auto">
              <Navbar.Text>
                <img src={top3} style={{marginRight: "5px"}}/>
                <Link to="/SanPham/DangKyLaiThu" className="toptext">Đăng ký lái thử</Link>
              </Navbar.Text>
            </Col>
            <Col md="auto" style={{paddingRight: "30px"}}>
              <Navbar.Text>
                <img src={top4} style={{marginRight: "5px"}}/>
                <Link to="/DichVu/DatLichDichVu" className="toptext">Đặt lịch dịch vụ</Link>
              </Navbar.Text>
            </Col>
          </Row>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;