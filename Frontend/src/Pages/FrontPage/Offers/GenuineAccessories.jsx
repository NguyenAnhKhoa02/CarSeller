import {Row, Col, Button, Modal} from "react-bootstrap";
import banner from "../../../Components/Assets/accessoriessBanner1.jpg"
import OpCanTruoc from "../../../Components/Assets/OpCanTruoc.jpg"
import OpCanSau from "../../../Components/Assets/OpCanSau.jpg"
import OpHongXe from "../../../Components/Assets/OpHongXe.jpg"
import OpXeSau1 from "../../../Components/Assets/OpCanSau1.jpg"
import OpXeTruoc1 from "../../../Components/Assets/OpCanTruoc1.jpg"
import LogoPAJERO from "../../../Components/Assets/LogoPAJERO.jpg"
import OpVeToiMau1 from "../../../Components/Assets/OpVeToiMau1.jpg"
import CanhLuotGio from "../../../Components/Assets/Canh_luot_gio1.jpg"
import {Link} from "react-router-dom"

import "./Offers.css"
function GenuineAccessories() {
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316" width="100%"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>Phụ kiện</h1>
            <p style={{fontSize:"1.5rem"}}>Cá tính theo cách của ban!</p>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingTop:"30px"}}>
        <Row style={{paddingBottom:"50px"}}>
            <h3>BỘ PHỤ KIỆN CÁ TÍNH</h3>
        </Row>
        <Row style={{paddingBottom:"50px"}}>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={OpCanTruoc} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>ỐP CẢN TRƯỚC</h3>
            </Col>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={OpCanSau} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>ỐP CẢN SAU</h3>
            </Col>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={OpHongXe} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>ỐP CẢN TRƯỚC</h3>
            </Col>
            
        </Row>
        <Row style={{paddingBottom:"50px"}}>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={OpXeTruoc1} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>ỐP CẢN TRƯỚC PAJERO</h3>
            </Col>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={OpXeSau1} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>ỐP CẢN SAU PAJERO</h3>
            </Col>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={OpVeToiMau1} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>ỐP VÈ TỐI MÀU PAJERO</h3>
            </Col>
        </Row>
        <Row style={{paddingBottom:"50px"}}>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={LogoPAJERO} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>Logo PAJERO</h3>
            </Col>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={CanhLuotGio} style={{maxWidth:"100%", height:"139px", width:"292px"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>Logo PAJERO</h3>
            </Col>
            <Col>
                <div className="Container-image" style={{marginBottom:"20px"}}>
                    <img src={LogoPAJERO} style={{maxWidth:"100%"}}/>
                </div>
                <h3  style={{fontWeight:"700", fontSize:"32px"}}>Logo PAJERO</h3>
            </Col>
        </Row>
        <div style={{paddingBottom:"100px", borderTopStyle:"solid", paddingTop:"25px"}}>
        <Row style={{color:"#5A646E"}}>
            <h5 style={{fontWeight:"bold"}}>BẠN ĐÃ SẴN SÀNG TRẢI NGHIỆM CÙNG MITSUBISHI MOTORS VIỆT NAM?</h5><br/>
            <p>Lựa chọn thanh dịch vụ bên dưới hoặc liên hệ nhà phân phối gần nhất để tìm hiểu thêm thông tin</p>
        </Row>
        <Link to="#"><Button variant="outline-dark" size="lg" className="MyBorder">NHÀ PHÂN PHỐI</Button></Link>
        <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" style={{marginLeft:"25px"}}>ĐĂNG KÝ LÁI THỬ</Button></Link>
    </div>
    </Row>
    </>
    )   
}

export default GenuineAccessories