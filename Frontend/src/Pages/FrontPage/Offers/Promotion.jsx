import {Row, Col, Button, Modal} from "react-bootstrap";
import banner from "../../../Components/Assets/bannerservice1.png"
import promotion1 from "../../../Components/Assets/promotion1.png"
import promotion2 from "../../../Components/Assets/promotion2.png"
import "./Offers.css"
function Promotion() {
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>KHUYẾN MÃI</h1>
            <p style={{fontSize:"1.5rem"}}>Ngập tràn ưu đãi khi mua xe Mitsubishi ngay trong tháng này. Tìm hiểu ngay!</p>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingTop:"50px"}}>
        <Row style={{paddingBottom:"50px"}}>
            <Col>
                <img src={promotion2} style={{maxWidth:"80%"}}/>
            </Col>
            <Col style={{alignSelf:"center"}}>
                <p>THỨ 3, 07 THÁNG MƯỜI MỘT 2023</p>
            </Col>
        </Row>
        <Row style={{paddingBottom:"50px"}}>
            <Col>
                <img src={promotion1} style={{maxWidth:"80%"}}/>
            </Col>
            <Col>
            
            </Col>
        </Row>
    </Row>
    </>
    )   
}

export default Promotion