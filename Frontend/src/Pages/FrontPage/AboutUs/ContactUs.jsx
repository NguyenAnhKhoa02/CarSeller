import {Row, Col, Button, Form, FloatingLabel, Card} from "react-bootstrap";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import banner from "../../../Components/Assets/contactUs.png";
import icon from "../../../Components/Assets/foot2.png"
import email from "../../../Components/Assets/foot3.png"

function ContactUs () {
    return (<>
    <Row style={{position:"relative", textAlign:"left", color:"white"}}>
        <img src={banner} height="750"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"5rem",marginLeft:"130px" ,color:"white", marginBottom:"10px"}}>LIÊN HỆ</h1>
            <p style={{fontWeight:"medium", fontSize:"30px",marginLeft:"130px" ,color:"white", maxWidth:"70%"}}>Quý khách hàng vui lòng gọi điện hoặc email đến Tổng đài Chăm sóc khách hàng Mitsubishi Motors Việt Nam vào các ngày làm việc (từ 8:00 - 17:00) hằng tuần. <br/>Chúng tôi hân hạnh được hỗ trợ.</p>
            <Row style={{marginLeft:"130px", maxWidth:"60%"}}>
                <Col>
                <p style={{fontWeight:"bold", fontSize:"32px" ,color:"white", marginBottom:"2px"}}>Chăm sóc khách hàng</p>
                <div style={{display:"flex"}}>
                    <img src={icon} style={{width:"30px",height:"30px",marginTop: "3px", color:"white"}}/>
                    <p style={{fontSize:"24px",marginLeft:"10px" ,color:"white", fontWeight:"bold"}}>1800 1514</p>
                </div>
                </Col>
                <Col>
                <p style={{fontWeight:"bold", fontSize:"32px",color:"white", marginBottom:"2px"}}>Hỗ trợ kỹ thuật</p>
                <div style={{display:"flex"}}>
                    <img src={icon} style={{width:"30px",height:"30px",marginTop: "3px" ,color:"white"}}/>
                    <p style={{fontSize:"24px",marginLeft:"10px" ,color:"white", fontWeight:"bold"}}>0903.999.141</p>
                </div>
                </Col>
            </Row>
            <Row style={{marginLeft:"130px", maxWidth:"60%", marginTop:"25px"}}>
                <Col>
                <p style={{fontWeight:"bold", fontSize:"32px" ,color:"white", marginBottom:"2px"}}>Email</p>
                <div style={{display:"flex"}}>
                    <img src={email} style={{width:"30px",height:"30px",marginTop: "3px", color:"white"}}/>
                    <p style={{fontSize:"24px",marginLeft:"10px" ,color:"white", fontWeight:"bold"}}>cskh@mitsubishi-motors.com.vn</p>
                </div>
                </Col>
                <Col>
                <p style={{fontWeight:"bold", fontSize:"32px",color:"white", marginBottom:"2px"}}>Thời gian làm việc</p>
                <div style={{display:"flex"}}>
                    <p style={{fontSize:"24px",marginLeft:"10px" ,color:"white", fontWeight:"bold"}}>08:00 - 17:00 (Thứ Hai - Thứ Sáu)</p>
                </div>
                </Col>
            </Row>
        </div>
    </Row>
    <Row style={{display:"flex", height:"auto"}}>
        <Col style={{maxWidth:"50%", backgroundColor:"black"}}>
            <Row style={{color:"white", maxWidth:"90%",textAlign:"left", marginLeft:"130px", marginTop:"80px"}}>
                <p style={{color:"red", fontWeight:"bold", fontSize:"30px"}}>Nhà máy</p>
                <Row style={{fontSize:"20px", marginBottom:"50px"}}>
                <p style={{margin: "10px 0 40px 0"}}>Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương, Việt Nam</p>
                <p>Điện thoại : (028) 3896 2181<br/>Số fax : (028) 3896 1566 - 3896 8238</p>
                </Row>
                <p style={{fontSize:"30px", fontWeight:"bold"}}>Văn phòng tại thành phố Hồ Chí Minh</p>
                <Row style={{fontSize:"20px", marginBottom:"50px"}}>
                <p style={{margin: "5px 0 40px 0"}}>Tầng 6, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ,Quận Bình Thạnh, TP. Hồ Chí Minh</p>
                <p>Điện thoại : (028) 3896 2181 <br/>Số fax : (028) 3896 1566 - 3896 8238</p>
                </Row>
                <p style={{fontSize:"30px", fontWeight:"bold"}}>Văn phòng tại Hà Nội</p>
                <Row style={{fontSize:"20px", marginBottom:"50px"}}>
                <p style={{margin: "5px 0 40px 0"}}>Phòng 410, Tòa nhà V-Tower, 649 Kim Mã, Q. Ba Đình, TP. Hà Nội, Việt Nam</p>
                <p>Điện thoại : (028) 3896 2181 <br/>Số fax : (028) 3896 1566 - 3896 8238</p>
                </Row>
                <p style={{fontSize:"30px", fontWeight:"bold"}}>Đường dây nóng</p>
                <div style={{display:"flex", marginBottom:"50px"}}>
                    <img src={icon} style={{width:"30px",height:"30px",marginTop: "3px", color:"white"}}/>
                    <p style={{fontSize:"20px",marginLeft:"10px" ,color:"white"}}>1800 1514</p>
                </div>
            </Row>
        </Col>
        <Col style={{maxWidth:"50%", color:"#222222"}}>
            
        </Col>
    </Row>
    <Row style={{maxWidth:"50%",margin:"0 auto", paddingBottom:"50px"}}>
        <Form>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h1 style={{fontWeight:"bold", color:"black", fontSize:"48px"}}>Đăng ký nhận thông tin</h1>
            </div>
            <FloatingLabel controlId="email" label="NHẬP ĐỊA CHỈ EMAIL CỦA BẠN*" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <p style={{color:"gray"}}>CHÍNH SÁCH VÀ ĐIỀU KHOẢN*</p>
            <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Tôi xác nhận đồng ý nhận thông tin liên quan đến Chính sách & Điều khoản"
                />
            </div>
            <p>Chọn đồng ý để chúng tôi biết bạn đã đọc và chấp thuận các Chính sách & Điều khoản</p>
            <Row><Button variant="outline-dark" type="submit" size="lg" className="MyBorder2">Đăng ký</Button></Row>
        </Form>
    </Row>
    </>
    );
}

export default ContactUs