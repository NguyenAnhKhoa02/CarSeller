import {Row, Col, Button} from "react-bootstrap"
import {useState} from 'react';
import banner from "../../../Components/Assets/bannerservice1.png"
import car1 from "../../../Components/Assets/Cars/xpandercrossbrown.png"
import car2 from "../../../Components/Assets/Cars/xpandercrossgray.png"
import car3 from "../../../Components/Assets/Cars/xpandercrossblack.png"
import car4 from "../../../Components/Assets/Cars/xpandercrosswhite.png"
import "./Cars.css"
function Product() {
    const [currentImage, setCurrentImage] = useState(car1);

    const handleImageChange = (newImage) => {
      setCurrentImage(newImage);
    };
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>MITSUBISHI XPANDER 2023</h1>
        </div>
    </Row>
    <Row style={{maxWidth:"85%",margin:"0 auto", paddingBottom:"50px",textAlign:"center"}}>
        <h1>Trang thiết bị</h1>
        <Row className="justify-content-md-center">
            <Col>
                <img src={currentImage} className="ProductImg" />
                <h4 style={{fontWeight:"bold"}}>Xpander Cross</h4>
                <p>Giá từ 698.000.000 VNĐ</p>
                <div className="imageButtons">
                    <button onClick={() => handleImageChange(car1)}></button>
                    <button onClick={() => handleImageChange(car2)}></button>
                    <button onClick={() => handleImageChange(car3)}></button>
                    <button onClick={() => handleImageChange(car4)}></button>
                </div>
            </Col>
            <Col>
                <img src={currentImage} className="ProductImg" />
                <h4 style={{fontWeight:"bold"}}>Xpander Cross 2</h4>
                <p>Giá từ 898.000.000 VNĐ</p>
                <div className="imageButtons">
                    <button onClick={() => handleImageChange(car6)}></button>
                    <button onClick={() => handleImageChange(car7)}></button>
                    <button onClick={() => handleImageChange(car8)}></button>
                    <button onClick={() => handleImageChange(car9)}></button>
                </div>
            </Col>
        </Row>
    </Row>
    </>
    );
}

export default Product