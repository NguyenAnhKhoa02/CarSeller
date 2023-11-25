import {Row, Col, Button, Form, FloatingLabel, Card} from "react-bootstrap"
import Slider from "react-slick";
import banner from "../../../Components/Assets/banneroffers1.png"
import icon1 from "../../../Components/Assets/fleetsalesicon1.png"
import icon2 from "../../../Components/Assets/fleetsalesicon2.png"
import icon3 from "../../../Components/Assets/fleetsalesicon3.png"
import icon4 from "../../../Components/Assets/fleetsalesicon4.png"
import icon5 from "../../../Components/Assets/fleetsalesicon5.png"
import icon6 from "../../../Components/Assets/fleetsalesicon6.png"
import car1 from "../../../Components/Assets/Cars/car1.png";
import car2 from "../../../Components/Assets/car2.png";
import car3 from "../../../Components/Assets/car3.png";
import car4 from "../../../Components/Assets/car4.png";

function FleetSales() {
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
        <img src={banner} height="875"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem",marginBottom:"550px",color:"black"}}>BÁN HÀNG DỰ ÁN</h1>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Row>
            <p>Công ty TNHH Ô tô Mitsubishi Việt Nam (MMV) cam kết mang đến cho Khách hàng giá trị cao nhất từ sản phẩm chất lượng đến dịch vụ tận tâm, phục vụ tốt nhất nhu cầu mua xe của quý khách. Với các sản phẩm góp mặt ở hầu hết các phân khúc, chúng tôi đáp ứng nhu cầu đa dạng của nhiều nhóm khách hàng:</p>
            <Row style={{fontWeight:"bold"}}>
                <Col style={{display:"flex",alignContent:"center"}}>
                <img src={icon1} style={{width:"30px",height:"30px",marginRight: "10px"}}/>
                <p>Khách hàng Cá nhân/Doanh nghiệp</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                <img src={icon2} style={{width:"30px",height:"30px",marginRight: "10px"}}/>
                <p>Khách hàng kinh doanh vận tải/ cho thuê xe</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                <img src={icon3} style={{width:"30px",height:"30px",marginRight: "10px"}}/>
                <p>Khách hàng nhà nước và các dự án</p>
                </Col>
            </Row>
            <p>Chúng tôi cam kết mang đến những gói sản phẩm phù hợp với những lợi ích dành riêng cho Quý khách:</p>
            <Row style={{fontWeight:"bold"}}>
                <Col style={{display:"flex",alignContent:"center"}}>
                    <img src={icon4} style={{width:"30px",height:"30px",marginRight: "10px"}}/>                
                    <p>Chính sách ưu đãi đặc biệt về giá</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                    <img src={icon5} style={{width:"30px",height:"30px",marginRight: "10px"}}/>                
                    <p>Đội ngũ hỗ trợ tư vấn hỗ trợ chuyên nghiệp</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                    <img src={icon6} style={{width:"30px",height:"30px",marginRight: "10px"}}/>                
                    <p>Dịch vụ giao xe và chăm sóc rộng khắp toàn quốc</p>
                </Col>
            </Row>
            <p>Quý khách có nhu cầu tư vấn mua xe ô tô cho dự án của mình và mong muốn nhận báo giá ưu đãi theo số lượng, vui lòng nhập thông tin bảng bên dưới</p>
        </Row>
        <Form action="/action_page.php">
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>1. Chọn mẫu xe</h3>
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
                <h3 style={{fontWeight:"bold"}}>2. Nhập thông tin của bạn</h3>
            </div>
            <FloatingLabel controlId="name" label="HỌ VÀ TÊN *" className="mb-3">
                <Form.Control type="text" placeholder="name" />
            </FloatingLabel>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="email" label="ĐỊA CHỈ EMAIL *" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phonenumber" label="SỐ ĐIỆN THOẠI *" className="mb-3">
                        <Form.Control type="tel" placeholder="00000" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="address" label="ĐỊA CHỈ CÔNG TY *" className="mb-3">
                        <Form.Control type="text" placeholder="tp.hcm" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phonenumber2" label="SỐ ĐIỆN THOẠI CÔNG TY *" className="mb-3">
                        <Form.Control type="tel" placeholder="00000" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="tradename" label="TÊN GIAO DỊCH *" className="mb-3">
                        <Form.Control type="text" placeholder="new trade" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="quantity" label="SỐ LƯỢNG *" className="mb-3">
                        <Form.Control type="number" placeholder="00000" />
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
            <Row><Button variant="outline-dark" type="submit" size="lg" className="MyBorder2">GỬI THÔNG TIN</Button></Row>
        </Form>
    </Row>
    </>
    );
}

export default FleetSales