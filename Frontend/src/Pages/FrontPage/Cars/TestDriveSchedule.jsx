import {Row,Col,Button,Table} from "react-bootstrap";
import { Link } from "react-router-dom";

function TryDriveSchedule() {
  return (
    <>
    <Row style={{ position: "relative", textAlign: "center", color: "black" }}>
        <Col style={{ padding: "50px 105px 0 105px" }}>
          <h1 style={{ fontSize: "55px", fontWeight: "800" }}>
            {" "}
            Lịch trưng bày và lái thử xe Mitsubishi tháng 12/2023
          </h1>
        </Col>
      </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Row>
          <div style={{textAlign: "justify" }}>
            <Col style={{ color: "black" }}>
              <p>
                Mitsubishi Motors Việt Nam (MMV) và các Nhà phân phối (NPP) ủy
                quyền trên toàn quốc tiếp tục triển khai các chương trình trưng
                bày, lái thử để sẵn sàng mang tới cho quý khách hàng những trải
                nghiệm trên toàn bộ dòng xe của chúng tôi: Xpander, Xpander
                Cross, Outlander, Attrage, Pajero Sport và Triton.
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
        <div style={{borderTopStyle:"solid", paddingTop:"25px", marginTop:"25px"}}>
          <Row style={{color:"#5A646E"}}>
              <h5 style={{fontWeight:"bold"}}>BẠN MUỐN LÀM GÌ TIẾP THEO?</h5><br/>
              <p>Bạn có thể tìm kiếm thêm thông tin liên quan từ menu bên dưới</p>
          </Row>
          <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder2">ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
        </Row>
      </>
  );
}

export default TryDriveSchedule;
