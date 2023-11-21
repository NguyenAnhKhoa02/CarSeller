import {Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import phone from "../Assets/foot1.png"
import phone2 from "../Assets/foot2.png"
import message from "../Assets/foot3.png"
import "./Footer.css"

function Footer() {
    return (
        <Row style={{backgroundColor:"black"}}>
            <Row>
                <Col style={{textAlign:"center"}}>
                    <div style={{display:"inline-block",textAlign:"left"}}>
                        <h5 style={{color:"white",marginTop:"25px"}}>SẢN PHẨM</h5>
                        <Link className="footertext" to="/SanPham/TatCaDongXe">Tất cả dòng xe</Link><br/>
                        <Link className="footertext" to="/SanPham/DangKyLaiThu">Đăng ký lái thử</Link><br/>
                        <Link className="footertext" to="/SanPham/LichLaiThu">Lịch lái thử</Link><br/>
                        <Link className="footertext" to="/SanPham/BangGia">Bảng giá</Link><br/>
                    </div>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <div style={{display:"inline-block",textAlign:"left"}}>
                        <h5 style={{color:"white",marginTop:"25px"}}>MUA XE</h5>
                        <Link className="footertext" to="/MuaXe/ChuongTrinhKhuyenMai">Chương trình khuyến mãi</Link><br/>
                        <Link className="footertext" to="/MuaXe/PhuKienChinhHang">Phụ kiện chính hãng</Link><br/>
                        <Link className="footertext" to="/MuaXe/BanHangDuAn">Bán hàng dự án</Link><br/>
                        <Link className="footertext" to="/MuaXe/XeDaQuaSuDungChinhHang">Xe đã qua sử dụng chính hãng</Link><br/>
                    </div>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <div style={{display:"inline-block",textAlign:"left"}}>
                        <h5 style={{color:"white",marginTop:"25px"}}>DỊCH VỤ</h5>
                        <Link className="footertext" to="/DichVu/ChinhSachBaoHanh">Chính sách bảo hành</Link><br/>
                        <Link className="footertext" to="/DichVu/BaoDuongNhanh">Bảo dưỡng nhanh</Link><br/>
                        <Link className="footertext" to="/DichVu/CacHangMucBaoDuong">Các hạng mục bảo dưỡng</Link><br/>
                        <Link className="footertext" to="/DichVu/ThongTinPhuTung">Thông tin phụ tùng</Link><br/>
                        <Link className="footertext" to="/DichVu/DatLichDichVu">Đặt lịch dịch vụ</Link>
                    </div>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <div style={{display:"inline-block",textAlign:"left"}}>
                        <h5 style={{color:"white",paddingTop:"25px"}}>CÔNG TY TNHH Ô TÔ MITSUBISHI VIỆT NAM</h5>
                        <p style={{color:"white"}}>
                            Địa chỉ: Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương<br/><br/>
                            <img src={phone2} style={{marginRight:"5px"}}/>
                            18001514 (Đường dây nóng)<br/>
                            <img src={phone} style={{marginRight:"5px"}}/>
                            0903 999 141 (Hỗ trợ kỹ thuật)<br/>
                            <img src={message} style={{marginRight:"5px"}}/>
                            cskh@mitsubishi-motors.com.vn
                        </p>
                    </div>
                </Col>
            </Row>
            <hr style={{borderColor:"white",borderStyle:"solid",borderWidth:"1px"}}/>
            <Row>
                <Col style={{textAlign:"end"}}>
                    <p style={{color:"white"}}>© Mitsubishi Motors Corporation 2022. Mọi quyền được bảo lưu.</p>
                </Col>
            </Row>
        </Row>
    );
}

export default Footer;