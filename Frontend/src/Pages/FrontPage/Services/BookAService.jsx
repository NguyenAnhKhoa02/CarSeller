import {Row, Button, Form, FloatingLabel} from "react-bootstrap"
import banner from "../../../Components/Assets/bannerservice1.png"

function BookAService () {
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered"><h1 style={{fontWeight:"bold", fontSize:"3rem"}}>ĐẶT LỊCH DỊCH VỤ</h1></div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Form>
            <div style={{textAlign:"center", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>1. Nhập thông tin cá nhân</h3>
            </div>
            <FloatingLabel controlId="name" label="HỌ VÀ TÊN *" className="mb-3">
                <Form.Control type="text" placeholder="name" />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="ĐỊA CHỈ EMAIL" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="phonenumber" label="SỐ ĐIỆN THOẠI *" className="mb-3">
                <Form.Control type="tel" placeholder="00000" />
            </FloatingLabel>
            <FloatingLabel controlId="typecar" label="MẪU XE *" className="mb-3">
                <Form.Select aria-label="Chọn mẫu xe">
                    <option>Chọn mẫu xe</option>
                    <option value="Xpander">Xpander</option>
                    <option value="Outlander">Outlander</option>
                    <option value="Attrage">Attrage</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="carnumber" label="BIỂN SỐ XE">
                <Form.Control type="text" placeholder="carnumber" />
            </FloatingLabel>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>2. Chọn loại dịch vụ</h3>
            </div>
            <FloatingLabel controlId="typeservice" label="DỊCH VỤ *" className="mb-3">
                <Form.Select aria-label="Chọn loại dịch vụ">
                    <option>Chọn loại dịch vụ</option>
                    <option value="DichVuKhac">Dịch vụ khác</option>
                    <option value="ChuongTrinhTrieuHoi">Chương trình triệu hồi</option>
                    <option value="BaoHanh">Bảo hành</option>
                </Form.Select>
            </FloatingLabel>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>3. Chọn nhà phân phối</h3>
            </div>
            <FloatingLabel controlId="distributor" label="NHÀ PHÂN PHỐI *" className="mb-3">
                <Form.Select aria-label="Chọn nhà phân phối">
                    <option>Chọn nhà phân phối</option>
                    <option value="TP.HCM">Thành phố Hồ Chí Minh</option>
                    <option value="HaNoi">Thành phố Hà Nội</option>
                    <option value="GiaLai">Tỉnh Gia Lai</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="date" label="NGÀY ĐẶT LỊCH *" className="mb-3">
                <Form.Control type="date" min={new Date().toISOString().slice(0, 10)} placeholder="1/1/2024" />
            </FloatingLabel>
            <FloatingLabel controlId="time" label="GIỜ ĐẶT LỊCH *" className="mb-3">
                <Form.Control type="time" placeholder="6:00 SA" />
            </FloatingLabel>
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

export default BookAService