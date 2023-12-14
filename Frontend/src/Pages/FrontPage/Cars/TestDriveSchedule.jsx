import { useEffect, useState } from "react";
import { Row,Col,Button,Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TryDriveSchedule() {
  const [showroomAndTestings, setShowroomANdTestings] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/showroomAndTestings/all`);
            setShowroomANdTestings(await response.json());
        } catch (error) {
            console.log("Error fetch data",error);
        }
    };
    fetchData()
  },[])


  const DisplayDate = ({timeStamp}) => {
    const originalDate = new Date(timeStamp)
    const formattedDate = originalDate.toLocaleDateString('en-GB',{
      day:'2-digit',
      month:'2-digit',
      year:'numeric'
    })
    return(
      <td>{formattedDate}</td>
    )
  }

  const DisplayTime = ({timeStamp}) => {
    const date = new Date(timeStamp)
    const Hour = ('0' + date.getHours()).slice(-2);
    const Minutes = ('0' + date.getMinutes()).slice(-2);

    return(
      <td>{Hour}:{Minutes}</td>
    )
  }

  const DisplayAddress = ({id}) => {
    const [nameAddress, setNameAddress] = useState([])
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8080/showroomAndTestings/nameAddress/${id}`);
              setNameAddress(await response.text());
          } catch (error) {
              console.log("Error fetch data",error);
          }
      };
      fetchData()
    },[])
    return(
      <td>{nameAddress}</td>
    )
  }

  const DisplayNameDistribution = ({id}) => {
    const [nameDistribution, setnameDistribution] = useState([])
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8080/showroomAndTestings/nameDistribution/${id}`);
              setnameDistribution(await response.text());
          } catch (error) {
              console.log("Error fetch data",error);
          }
      };
      fetchData()
    },[])
    return(
      <td>{nameDistribution}</td>
    )
  }

  const DisplayHotline = ({id}) => {
    const [hotline, setHotline] = useState([])
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8080/showroomAndTestings/hotline/${id}`);
              setHotline(await response.text());
          } catch (error) {
              console.log("Error fetch data",error);
          }
      };
      fetchData()
    },[])
    return(
      <td>{hotline}</td>
    )
  }

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
                  NHÀ PHÂN PHỐI
                </th>
                <th style={{}} className="Table bg-grey">
                  NGÀY SỰ KIỆN
                </th>
                <th style={{}} className="Table bg-grey">
                  GIỜ BẮT ĐẦU
                </th>
                <th style={{}} className="Table bg-grey">
                  GIỜ KẾT THÚC
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
              {showroomAndTestings.map((item,index) => (
                <tr>
                  <DisplayNameDistribution id={item.id}></DisplayNameDistribution>
                  <DisplayDate timeStamp={item.date}></DisplayDate>
                  <DisplayTime timeStamp={item.begin}></DisplayTime>
                  <DisplayTime timeStamp={item.end}></DisplayTime>
                  <DisplayAddress id={item.id}></DisplayAddress>
                  <DisplayHotline id={item.id}></DisplayHotline>
                </tr>
              ))}

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
