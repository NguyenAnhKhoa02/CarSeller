import {Row, Col, Button, Form, FloatingLabel, Card} from "react-bootstrap"
import banner from "../../../Components/Assets/bannerservice1.png"
import car1 from "../../../Components/Assets/Cars/car1.png";
import car2 from "../../../Components/Assets/car2.png";
import car3 from "../../../Components/Assets/car3.png";
import car4 from "../../../Components/Assets/car4.png";
import Slider from "react-slick";
import "./Cars.css"
function BookATestDrive () {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      arrows: false,
      speed: 500
    };
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>ĐĂNG KÝ LÁI THỬ</h1>
            <p style={{fontSize:"1.5rem"}}>Trải nghiệm ngay các mẫu xe của Mitsubishi và nhận những phần quà hấp dẫn!</p>
        </div>
    </Row>
    <Row style={{maxWidth:"50%",margin:"0 auto", paddingBottom:"50px"}}>
        <Form>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>1. Chọn mẫu xe của bạn</h3>
            </div>
            <Slider {...settings}>
                <div>
                    <Card className="MyCard">
                    <Card.Img variant="top" src={car1} />
                    <Card.Body style={{textAlign: "center", }}>
                        <Card.Title>XPANDER CROSS 2023</Card.Title>
                        <Card.Text>
                        Giá từ 698.000.000 VNĐ
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card>
                    <Card.Img variant="top" src={car2} />
                    <Card.Body style={{textAlign: "center", }}>
                        <Card.Title>NEW OUTLANDER</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card>
                    <Card.Img variant="top" src={car3} />
                    <Card.Body style={{textAlign: "center", }}>
                        <Card.Title>NEW XPANDER</Card.Title>
                        <Button variant="secondary">Xem thêm</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card>
                    <Card.Img variant="top" src={car4} />
                    <Card.Body style={{textAlign: "center", }}>
                        <Card.Title>XPANDER CROSS</Card.Title>
                        <Button variant="secondary">Xem thêm</Button>
                    </Card.Body>
                    </Card>
                </div>
            </Slider>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>2. Thông tin cá nhân</h3>
            </div>
            <FloatingLabel controlId="name" label="HỌ VÀ TÊN *" className="mb-3">
                <Form.Control type="text" placeholder="name" />
            </FloatingLabel>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="email" label="ĐỊA CHỈ EMAIL (TUỲ CHỌN)" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phonenumber" label="SỐ ĐIỆN THOẠI *" className="mb-3">
                        <Form.Control type="tel" placeholder="00000" />
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel controlId="car" label="PHIÊN BẢN" className="mb-3">
                <Form.Select aria-label="Chọn phiên bản">
                    <option>Chọn phiên bản</option>
                    <option value="Xpander">Xpander</option>
                    <option value="Outlander">Outlander</option>
                    <option value="Attrage">Attrage</option>
                </Form.Select>
            </FloatingLabel>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>3. Chọn nhà phân phối</h3>
            </div>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="distributor" label="NHÀ PHÂN PHỐI *" className="mb-3">
                        <Form.Select aria-label="Chọn nhà phân phối">
                            <option>Chọn nhà phân phối</option>
                            <option value="TP.HCM">Thành phố Hồ Chí Minh</option>
                            <option value="HaNoi">Thành phố Hà Nội</option>
                            <option value="GiaLai">Tỉnh Gia Lai</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="requirement" label="BẠN CÓ NHU CẦU MUA XE TRONG BAO LÂU?*" className="mb-3">
                        <Form.Select aria-label="Chọn nhà phân phối">
                            <option>Chọn nhu cầu</option>
                            <option value="1">1 tháng</option>
                            <option value="3">3 tháng</option>
                            <option value="6">6 tháng</option>
                            <option value=">6">Trên 6 tháng</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <p style={{color:"gray"}}>ĐIỀU KIỆN & ĐIỀU KHOẢN VỀ CHÍNH SÁCH BẢO MẬT*</p>
            <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Tôi xác nhận đồng ý nhận thông tin liên quan đến dịch vụ chăm sóc khách hàng, khuyến mãi, hoặc các thông tin tiếp thị sản phẩm và dịch vụ được cung cấp bởi MMV, các nhà phân phối ủy quyền của MMV và các đối tác kinh doanh được chỉ định bởi MMV."
                />
            </div>
            <Row><Button variant="outline-dark" type="submit" size="lg" className="MyBorder2">ĐẶT LỊCH</Button></Row>
        </Form>
    </Row>
    </>
    );
}

export default BookATestDrive