import {Row, Col, Accordion, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useState} from 'react';
import banner from "../../../Components/Assets/bannerservice1.png"
import car1 from "../../../Components/Assets/Cars/xpandercrossbrown.png";
import car2 from "../../../Components/Assets/Cars/xpandercrossgray.png";
import car3 from "../../../Components/Assets/Cars/xpandercrossblack.png";
import car4 from "../../../Components/Assets/Cars/xpandercrosswhite.png";
import car6 from "../../../Components/Assets/Cars/xpandercrosswhite.png";
import car7 from "../../../Components/Assets/Cars/xpandercrossblack.png";
import car8 from "../../../Components/Assets/Cars/xpandercrossbrown.png";
import car9 from "../../../Components/Assets/Cars/xpandercrossgray.png";

function Product() {
    const [currentImage1, setCurrentImage1] = useState(car1);
    const [currentImage2, setCurrentImage2] = useState(car6);

    const handleImageChange = (newImage, productNumber) => {
        if (productNumber === 1) {
          setCurrentImage1(newImage);
        } else if (productNumber === 2) {
          setCurrentImage2(newImage);
        }
    };
        return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>MITSUBISHI XPANDER 2023</h1>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <h1 style={{textAlign:"center"}}>Trang thiết bị</h1>
        <Row className="justify-content-md-center" style={{paddingBottom:"50px"}}>
            <Col style={{textAlign:"center"}}>
                <img src={currentImage1} className="ProductImg" />
                <h4 style={{fontWeight:"bold"}}>Xpander Cross</h4>
                <p>Giá từ 698.000.000 VNĐ</p>
                <div className="imageButtons">
                    <button style={{backgroundColor:"brown"}}onClick={() => handleImageChange(car1, 1)}></button>
                    <button style={{backgroundColor:"gray"}}onClick={() => handleImageChange(car2, 1)}></button>
                    <button style={{backgroundColor:"black"}}onClick={() => handleImageChange(car3, 1)}></button>
                    <button style={{backgroundColor:"white"}}onClick={() => handleImageChange(car4, 1)}></button>
                </div>
            </Col>
            <Col style={{textAlign:"center"}}>
                <img src={currentImage2} className="ProductImg" />
                <h4 style={{fontWeight:"bold"}}>Xpander Cross 2</h4>
                <p>Giá từ 898.000.000 VNĐ</p>
                <div className="imageButtons">
                    <button style={{backgroundColor:"white"}}onClick={() => handleImageChange(car6, 2)}></button>
                    <button style={{backgroundColor:"black"}}onClick={() => handleImageChange(car7, 2)}></button>
                    <button style={{backgroundColor:"brown"}}onClick={() => handleImageChange(car8, 2)}></button>
                    <button style={{backgroundColor:"gray"}}onClick={() => handleImageChange(car9, 2)}></button>
                </div>
            </Col>
        </Row>
        <Row>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>KÍCH THƯỚC VÀ TRỌNG LƯỢNG</Accordion.Header>
                    <Accordion.Body>
                    <h5>Kích thước tổng thể (DàixRộngxCao)</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>4.595 x 1.790 x 1.750 mm</p>
                    <h5>Khoảng cách hai cầu xe (Chiều dài cơ sở)</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>2.775 mm</p>
                    <h5>Khoảng cách hai bánh xe trước</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>1.520 mm</p>
                    <h5>Khoảng cách hai bánh xe sau</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>1.510 mm</p>
                    <h5>Bán kính quay vòng tối thiểu</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>5,2 m</p>
                    <h5>Khoảng sáng gầm xe</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>225 mm</p>
                    <h5>Số chỗ ngồi</h5>
                    <p style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>7</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>ĐỘNG CƠ VÀ VẬN HÀNH</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>TRUYỀN ĐỘNG VÀ HỆ THỐNG TREO</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>NGOẠI THẤT</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>NỘI THẤT</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>AN TOÀN</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
        <div style={{borderTopStyle:"solid", paddingTop:"25px", marginTop:"25px", textAlign:"center"}}>
            <Row>
                <h5 style={{color:"red",fontWeight:"bold"}}>BẠN MUỐN LÁI THỬ?</h5><br/>
                <p>Hãy đăng ký lái thử ngay tại nút ở bên dưới!</p>
            </Row>
            <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" >ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
    </Row>
    </>
    );
}

export default Product