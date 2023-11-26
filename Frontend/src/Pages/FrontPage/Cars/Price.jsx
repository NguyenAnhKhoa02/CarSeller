import {Row, Col, Button, Form, FloatingLabel, Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import banner from "../../../Components/Assets/bannerservice1.png"
import car2 from "../../../Components/Assets/Cars/car2.png"
import car3 from "../../../Components/Assets/Cars/car3.png"
import car4 from "../../../Components/Assets/Cars/car4.png"
import "./Cars.css";
function Price () {
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="500"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"5rem"}}>BẢNG GIÁ & KHUYẾN MÃI</h1>
        </div>
    </Row>
    {/* car 1 */}
    <Row style={{maxWidth:"60%", margin:"0 auto", paddingBottom:"60px", paddingTop:"60px"}}>
        <img src={car2} height="auto"/>
        <h2 style={{textAlign:"center", color:"black", fontWeight:"bold", marginBottom:"25px"}}>XFORCE</h2>
        <table style={{width:"100%", color:"black", bordercollapse:"collapse"}}>
            <tbody style={{border:"2px", width:"100%", color:"black", border:"1px solid #ddd"}}>
                <tr style={{height:"50px", fontSize:"20px", backgroundColor:"#f3f3f4"}}>
                    <th style={{width:"30%", textAlign:"center"}}>Đặt hàng trước</th>
                    <th style={{width:"60%", textAlign:"center"}}>Ưu đãi đặt hàng trước từ 01/12/2023 đến 30/12/2023</th>
                </tr>
                <tr style={{height:"50px", fontSize:"20px", color:"#222222", backgroundColor:"white"}}>
                    <td style={{width:"30%", textAlign:"center"}}>Đặt cọc 10 triệu đồng</td>
                    <td style={{width:"60%", textAlign:"left", padding:"10px"}}>
                        <p>– Ưu đãi 2 năm bảo dưỡng hoặc 40.000 km (Tùy điều kiện nào tới trước) (*)</p>
                        <p>– Tặng thêm 1.000 điểm tích lũy trên ứng dụng Mitsubishi Connect+ (**)</p>
                    </td>
                </tr>   
            </tbody>
        </table>
        <div style={{fontSize:"20px", paddingTop:"10px", paddingBottom:"10px"}}>
            <p>(*) Áp dụng tùy theo điều kiện nào đến trước.</p>
            <p>(**) Điểm cộng chỉ được ứng dụng khi bạn đăng ký đặt trước xe thành công tại đại lý.</p>
        </div>
    </Row>
    {/* car 2 */}
    <Row style={{maxWidth:"60%", margin:"0 auto", paddingBottom:"60px", paddingTop:"60px"}}>
        <img src={car3} height="auto"/>
        <h2 style={{textAlign:"center", color:"black", fontWeight:"bold", marginBottom:"25px"}}>NEW TRITON ATHLETE</h2>
        <table style={{width:"100%", color:"black", bordercollapse:"collapse"}}>
            <tbody style={{border:"2px", width:"100%", color:"black", border:"1px solid #ddd"}}>
                <tr style={{height:"50px", fontSize:"20px", backgroundColor:"#f3f3f4"}}>
                    <th style={{width:"15%", textAlign:"center"}}>Phiến bản</th>
                    <th style={{width:"15%", textAlign:"center"}}>Giá bán lẻ (VNĐ)</th>
                    <th style={{width:"60%", textAlign:"center"}}>Ưu đãi tháng 12 năm 2023</th>
                </tr>
                <tr style={{height:"50px", fontSize:"20px", color:"#222222", backgroundColor:"white"}}>
                    <td style={{width:"15%", textAlign:"center"}}>4×4 AT Athlete (Euro 5)</td>
                    <td style={{width:"15%", textAlign:"center"}}>905.000.000</td>
                    <td style={{width:"60%", textAlign:"left", padding:"10px"}}>
                        <p>– Hỗ trợ 100% lệ phí trước bạ (Trị giá 56.000.000 VNĐ)</p>
                    </td>
                </tr>   
                <tr style={{height:"50px", fontSize:"20px", color:"#222222", backgroundColor:"#f3f3f4"}}>
                    <td style={{width:"20%", textAlign:"center"}}>4×2 AT Athlete (Euro 5)</td>
                    <td style={{width:"20%", textAlign:"center"}}>780.000.000</td>
                    <td style={{width:"50%", textAlign:"left", padding:"10px"}}>
                        <p>– Hỗ trợ 100% lệ phí trước bạ (Trị giá 47.000.000 VNĐ)</p>
                        <p>– 01 Năm bảo hiểm vật chất (Trị giá ~ 10.000.000 VNĐ)</p>
                        <p>– Nắp thùng cuộn cơ (Trị giá 21.000.000 VNĐ)</p>
                    </td>
                </tr>   
            </tbody>           
        </table>
        <div style={{fontSize:"20px", paddingTop:"10px", paddingBottom:"10px"}}>
            <p>* Chương trinh ưu đãi từ NPP, để biết thêm chi tiết về điều kiện, điều khoản áp dụng, quý khách hàng vui lòng liên hệ Nhà Phân phối ủy quyền gần nhất</p>
        </div>
        <div style={{textAlign:"center", padding:"20px"}}>
            <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" style={{marginLeft:"40px",width:"300px", height:"55px"}}>ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
    </Row>
    {/* car 3 */}
    <Row style={{maxWidth:"60%", margin:"0 auto", paddingBottom:"60px", paddingTop:"60px"}}>
        <img src={car4} height="auto"/>
        <h2 style={{textAlign:"center", color:"black", fontWeight:"bold", marginBottom:"25px"}}>NEW XPANDER</h2>
        <table style={{width:"100%", color:"black", bordercollapse:"collapse"}}>
            <tbody style={{border:"2px", width:"100%", color:"black", border:"1px solid #ddd"}}>
                <tr style={{height:"50px", fontSize:"20px", backgroundColor:"#f3f3f4"}}>
                    <th style={{width:"15%", textAlign:"center"}}>Phiến bản</th>
                    <th style={{width:"15%", textAlign:"center"}}>Giá bán lẻ (VNĐ)</th>
                    <th style={{width:"60%", textAlign:"center"}}>Ưu đãi tháng 12 năm 2023</th>
                </tr>
                <tr style={{height:"50px", fontSize:"20px", color:"#222222", backgroundColor:"white"}}>
                    <td style={{width:"15%", textAlign:"center"}}>AT Premium MY23</td>
                    <td style={{width:"15%", textAlign:"center"}}>658.000.000</td>
                    <td style={{width:"60%", textAlign:"left", padding:"10px"}}>
                        <p>– Hỗ trợ 50% lệ phí trước bạ (Trị giá 35.000.000 VNĐ)</p>
                        <p>– Camera toàn cảnh 360 (Trị giá 20.000.000 VNĐ)</p>
                        <p>– 01 năm bảo hiểm vật chất (Trị giá ~ 8.500.000 VNĐ)</p>
                    </td>
                </tr>   
                <tr style={{height:"50px", fontSize:"20px", color:"#222222", backgroundColor:"#f3f3f4"}}>
                    <td style={{width:"20%", textAlign:"center"}}>AT MY23</td>
                    <td style={{width:"20%", textAlign:"center"}}>598.000.000</td>
                    <td style={{width:"50%", textAlign:"left", padding:"10px"}}>
                        <p>– Hỗ trợ 100% lệ phí trước bạ (Trị giá 59.800.000 VNĐ)</p>
                    </td>
                </tr>   
            </tbody>           
        </table>
        <div style={{fontSize:"20px", paddingTop:"10px", paddingBottom:"10px"}}>
            <p>* Chương trinh ưu đãi từ NPP, để biết thêm chi tiết về điều kiện, điều khoản áp dụng, quý khách hàng vui lòng liên hệ Nhà Phân phối ủy quyền gần nhất</p>
        </div>
        <div style={{textAlign:"center", padding:"20px"}}>
            <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" style={{marginLeft:"40px",width:"300px", height:"55px"}}>ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
    </Row>
    </>
    )
}

export default Price