import {Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import banner from "../../../Components/Assets/Page/bannerservice2.png"
import service1 from "../../../Components/Assets/Page/expressservice1.png"
import service2 from "../../../Components/Assets/Page/expressservice2.png"
import service3 from "../../../Components/Assets/Page/expressservice3.png"
import service4 from "../../../Components/Assets/Page/expressservice4.png"

function ExpressService() {
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>Bảo dưỡng nhanh</h1>
            <p style={{fontSize:"1.5rem"}}>Nhằm nâng cao chất lượng dịch vụ và tiết kiệm thời gian cho khách hàng, dịch vụ Bảo dưỡng nhanh đã được Mitsubishi Motors<br/> triển khai tại hầu hết các Nhà phân phối ủy quyền trên toàn quốc.</p>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Col><img src={service1}/></Col>
        <Col className="textcontain"><p>Đến với dịch vụ Bảo dưỡng nhanh, xe của khách hàng sẽ được ưu tiên thực hiện trong khoang riêng biệt bởi 02 Kỹ thuật viên với đầy đủ các hạng mục kiểm tra và bảo dưỡng, đảm bảo theo đúng quy trình tiêu chuẩn của Mitsubishi Motors cùng với sự đầu tư về các trang thiết bị chuyên dụng.* Áp dụng đối với các cấp Bảo dưỡng định kỳ thông thường (không bao gồm các cấp bảo dưỡng lớn).</p></Col>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Col className="textcontain">
            <h2>TIẾT KIỆM THỜI GIAN VÀ CHI PHÍ</h2>
            <p>
                Thời gian thực hiện của Kỹ thuật viên:<br/>
                - Cấp 5.000 Km: 25 phút<br/>
                - Cấp 10.000 Km: 30 phút<br/>
                - Cấp 20.000 Km: 35 phút<br/>
                (hoặc đối với các cấp tương đương)
            </p>
        </Col>
        <Col><img src={service2}/></Col>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Col><img src={service3}/></Col>
        <Col className="textcontain">
            <h2>NÂNG TẦM CHẤT LƯỢNG DỊCH VỤ</h2>
            <p>Cam kết thực hiện đúng và đầy đủ quy trình bảo dưỡng chính hãng của Mitsubishi Motors toàn cầu</p>
        </Col>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Col className="textcontain">
            <h2>LÁI XE AN TOÀN</h2>
            <p>Với quy trình tiêu chuẩn và phụ tùng chính hãng Mitsubishi bảo đảm cho xe vận hành an toàn và tin cậy.</p>
        </Col>
        <Col><img src={service4}/></Col>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <div style={{borderTopStyle:"solid", paddingTop:"25px", marginTop:"25px"}}>
            <Row style={{color:"#5A646E"}}>
                <h5 style={{fontWeight:"bold"}}>BẠN ĐÃ SẴN SÀNG TRẢI NGHIỆM CÙNG MITSUBISHI MOTORS VIỆT NAM?</h5><br/>
                <p>Lựa chọn thanh dịch vụ bên dưới hoặc liên hệ nhà phân phối gần nhất để tìm hiểu thêm thông tin</p>
            </Row>
            <Link to="/DichVu/DatLichDichVu"><Button variant="outline-dark" size="lg" className="MyBorder">ĐẶT LỊCH DỊCH VỤ</Button></Link>
            <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" style={{marginLeft:"25px"}}>ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
    </Row>
    </>
    );
}

export default ExpressService