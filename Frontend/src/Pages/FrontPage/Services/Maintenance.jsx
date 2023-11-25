import {Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import banner from "../../../Components/Assets/bannerservice1.png"

function Maintenance (){
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered"><h1 style={{fontWeight:"bold", fontSize:"3rem"}}>CÁC HẠNG MỤC BẢO DƯỠNG</h1></div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <h4>Để đảm bảo chiếc xe của bạn luôn trong tình trạng hoàn hảo và an toàn, việc bảo dưỡng định kỳ được thực hiện bởi kỹ thuật viên được đào tạo chuyên nghiệp, phụ tùng chính hãng chất lượng cao của MITSUBISHI MOTORS VIỆT NAM, mang đến dịch vụ bảo dưỡng phù hợp cho xe bạn.</h4>
        <p>Mục đích của công việc bảo dưỡng là giữ cho xe luôn trong điều kiện sử dụng tốt nhất và tránh được những trục trặc trên đường, cụ thể như sau:</p>
        <Col>
            <h2>01</h2>
            <hr style={{borderWidth:"2px"}}/>
            <p>Thay thế định kỳ những vật liệu và phụ tùng hao mòn nhanh như dầu nhớt, lọc nhớt, lọc nhiên liệu, lọc gió, v.v… (Những loại thay thế này rất quan trọng nhằm giữ cho động cơ và các chi tiết quan trọng khác của xe luôn hoạt động một cách tối ưu).</p>
        </Col>
        <Col>
            <h2>02</h2>
            <hr style={{borderWidth:"2px"}}/>
            <p>Phát hiện hỏng hóc có thể xảy ra, kiểm tra các hệ thống quan trọng như phanh, treo, lái, hệ thống an toàn trên xe, từ đó có cách xử lý cần thiết, kịp thời để giảm thiểu chi phí sửa chữa thực tế.</p>
        </Col>
        <Col>
            <h2>03</h2>
            <hr style={{borderWidth:"2px"}}/>
            <p>An toàn khi lái xe.</p>
        </Col>
        <Col>
            <h2>04</h2>
            <hr style={{borderWidth:"2px"}}/>
            <p>Đảm bảo quá trình bảo hành theo quy định.</p>
        </Col>
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

export default Maintenance