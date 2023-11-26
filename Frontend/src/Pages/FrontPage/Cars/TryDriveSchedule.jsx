import {
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Table,
  Card,
} from "react-bootstrap";
import car1 from "../../../Components/Assets/Cars/car1.png";
import car2 from "../../../Components/Assets/car2.png";
import car3 from "../../../Components/Assets/car3.png";
import car4 from "../../../Components/Assets/car4.png";
import { Link } from "react-router-dom";
import "./Cars.css";

import Slider from "react-slick";

function TryDriveSchedule() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: true,
    speed: 500,
  };
  return (
    <>
      <Row
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <Col style={{ padding: "50px 105px 0 105px" }}>
          <h1 style={{ fontSize: "55px", fontWeight: "800" }}>
            {" "}
            Lịch trưng bày và lái thử xe Mitsubishi tháng 12/2023
          </h1>
        </Col>
      </Row>
      <Row
        style={{ position: "relative", marginLeft: "20px", marginTop: "30px" }}
      >
        <Row>
          <div style={{ width: "70%", textAlign: "justify" }}>
            <Col style={{ color: "black" }}>
              <p>
                Mitsubishi Motors Việt Nam (MMV) và các Nhà phân phối (NPP) ủy
                quyền trên toàn quốc tiếp tục triển khai các chương trình trưng
                bày, lái thử để sẵn sàng mang tới cho quý khách hàng những trải
                nghiệm trên toàn bộ dòng xe của chúng tôi: Xpander, Xpander
                Cross, Outlander, Attrage, Pajero Sport và Triton.{" "}
              </p>
            </Col>
          </div>
          <p style={{ }}>
            Lịch trưng bày và lái thử xe Mitsubishi tháng 12/2023:
          </p>
        </Row>

        <Row>
          <Table className="Table">
            <thead>
              <tr>
                <th style={{}} className="Table bg-grey">
                  TỈNH/THÀNH
                </th>
                <th style={{}} className="Table bg-grey">
                  NHÀ PHÂN PHỐI
                </th>
                <th style={{}} className="Table bg-grey">
                  NGÀY SỰ KIỆN
                </th>
                <th style={{}} className="Table bg-grey">
                  GIỜ SỰ KIỆN
                </th>
                <th style={{}} className="Table bg-grey">
                  ĐỊA ĐIỂM
                </th>
                <th style={{}} className="Table bg-grey">
                  HOTLINE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="Table">HÀ NỘI</td>
                <td className="Table">AN DÂN</td>
                <td className="Table">11/12/2023</td>
                <td className="Table">8h00 - 14h00</td>
                <td className="Table">
                  AN CAFE <br />
                  Lô 62–63 dự án 319 Bồ Đề, quận Long Biên, Hà Nội, Long Biên,
                  Hà Nội
                </td>
                <td className="Table">0987 121 219</td>
              </tr>

              <tr>
                <td className="Table bg-grey">HÀ NỘI</td>
                <td className="Table bg-grey">AN DÂN</td>
                <td className="Table bg-grey">12/12/2023</td>
                <td className="Table bg-grey">8h00 - 13h00</td>
                <td className="Table bg-grey">
                  Showroom An Dân <br />
                  Số 1 Nguyễn Văn Linh, Long Biên, Hà Nội
                </td>
                <td className="Table bg-grey">0987 121 219</td>
              </tr>

              <tr>
                <td className="Table">HÀ NỘI</td>
                <td className="Table">VIỆT HÙNG</td>
                <td className="Table">11/12/2023</td>
                <td className="Table">8h00 - 14h00</td>
                <td className="Table">
                  EMU CAFE <br />
                  KĐT Dương Nội, Hà Đông, Hà Nội
                </td>
                <td className="Table">0987 121 219</td>
              </tr>

              <tr>
                <td className="Table bg-grey">HÀ NỘI</td>
                <td className="Table bg-grey">VIỆT HÙNG</td>
                <td className="Table bg-grey">11/12/2023</td>
                <td className="Table bg-grey">8h00 - 14h00</td>
                <td className="Table bg-grey">
                  Green Cafe Hà Nam <br />
                  Trường Trinh, Phủ Lý, Hà Nam
                </td>
                <td className="Table bg-grey">0987 121 219</td>
              </tr>

              <tr>
                <td className="Table">HÀ NỘI</td>
                <td className="Table">AN DÂN</td>
                <td className="Table">11/12/2023</td>
                <td className="Table">8h00 - 14h00</td>
                <td className="Table">
                  AN CAFE <br />
                  Lô 62–63 dự án 319 Bồ Đề, quận Long Biên, Hà Nội, Long Biên,
                  Hà Nội
                </td>
                <td className="Table">0987 121 219</td>
              </tr>
            </tbody>
          </Table>
          <p style={{padding:"0"}}>
            Khách hàng có nhu cầu đăng ký lái thử, vui lòng đăng ký bằng cách
            gọi điện thoại trực tiếp đến hotline của Nhà phân phối
          </p>
          <p style={{padding:"0"}}>
            hoặc đăng ký online <Link to={"/SanPham/DangKyLaiThu"}>tại đây</Link>.
          </p>
        </Row>

        <Row style={{ marginTop: "80px" }}>
          <Row
            style={{ maxWidth: "60%", margin: "0 auto", paddingBottom: "50px" }}
          >
            <Form>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>1. Chọn mẫu xe của bạn</h3>
              </div>
              <Slider {...settings}>
                <div>
                  <Card className="MyCard">
                    <Card.Img variant="top" src={car1} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>XPANDER CROSS 2023</Card.Title>
                      <Card.Text>Giá từ 698.000.000 VNĐ</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card>
                    <Card.Img variant="top" src={car2} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>NEW OUTLANDER</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card>
                    <Card.Img variant="top" src={car3} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>NEW XPANDER</Card.Title>
                      <Button variant="secondary">Xem thêm</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card>
                    <Card.Img variant="top" src={car4} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>XPANDER CROSS</Card.Title>
                      <Button variant="secondary">Xem thêm</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>2. Thông tin cá nhân</h3>
              </div>
              <FloatingLabel
                controlId="name"
                label="HỌ VÀ TÊN *"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name" />
              </FloatingLabel>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="email"
                    label="ĐỊA CHỈ EMAIL (TUỲ CHỌN)"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="phonenumber"
                    label="SỐ ĐIỆN THOẠI *"
                    className="mb-3"
                  >
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
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>3. Chọn nhà phân phối</h3>
              </div>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="distributor"
                    label="NHÀ PHÂN PHỐI *"
                    className="mb-3"
                  >
                    <Form.Select aria-label="Chọn nhà phân phối">
                      <option>Chọn nhà phân phối</option>
                      <option value="TP.HCM">Thành phố Hồ Chí Minh</option>
                      <option value="HaNoi">Thành phố Hà Nội</option>
                      <option value="GiaLai">Tỉnh Gia Lai</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="requirement"
                    label="BẠN CÓ NHU CẦU MUA XE TRONG BAO LÂU?*"
                    className="mb-3"
                  >
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
              <p style={{ color: "gray" }}>
                ĐIỀU KIỆN & ĐIỀU KHOẢN VỀ CHÍNH SÁCH BẢO MẬT*
              </p>
              <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Tôi xác nhận đồng ý nhận thông tin liên quan đến dịch vụ chăm sóc khách hàng, khuyến mãi, hoặc các thông tin tiếp thị sản phẩm và dịch vụ được cung cấp bởi MMV, các nhà phân phối ủy quyền của MMV và các đối tác kinh doanh được chỉ định bởi MMV."
                />
              </div>
              <Row>
                <Button
                  variant="outline-dark"
                  type="submit"
                  size="lg"
                  className="MyBorder2"
                >
                ĐĂNG KÝ LÁI THỬ
                </Button>
              </Row>
            </Form>
          </Row>
        </Row>
      </Row>
      <div style={{paddingLeft:"200px", paddingBottom:"100px", borderTopStyle:"solid", paddingTop:"25px"}}>
        <Row style={{color:"#5A646E"}}>
            <h5 style={{fontWeight:"bold"}}>BẠN MUỐN LÀM GÌ TIẾP THEO?</h5><br/>
            <p>Bạn có thể tìm kiếm thêm thông tin liên quan từ menu bên dưới</p>
        </Row>
        <Link to="#"><Button variant="outline-dark" size="lg" className="MyBorder">NHÀ PHÂN PHỐI</Button></Link>
        <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder2" style={{marginLeft:"25px"}}>ĐĂNG KÝ LÁI THỬ</Button></Link>
      </div>
    </>
  );
}

export default TryDriveSchedule;
