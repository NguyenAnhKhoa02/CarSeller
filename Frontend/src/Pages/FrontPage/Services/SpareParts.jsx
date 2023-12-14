import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function SpareParts() {
  const [spareParts, setSpareParts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/type_Spare_Parts/all`);
            setSpareParts(await response.json());
        } catch (error) {
            console.log("Error fetch data",error);
        }
    };
    fetchData()
  },[])
  const ImageFieldCus = ({ url }) => {
    if(url == 'empty' || url == undefined) 
      url = "no-image-available.png"
    const [imageUrl, setImageUrl] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/image/${url}`)
                if(response.ok){
                    const blob = await response.blob()
                    const imageURL = URL.createObjectURL(blob)
                    setImageUrl(imageURL)
                }
            } catch (error) {
                console.log("Error fetch data" , error);     
            }
        };
        fetchData()
    },[])
    return imageUrl ? <img width="350" height="300" src={imageUrl} alt="Image"/> : null;
  };

  return (
    <>
      <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        {spareParts.map((item, index) => (
          <div key={index}>
            <Row style={{paddingBottom:"20px"}}>
                <h3 className="fontWeight-700">{item.nameTypeSparePart}</h3>
            </Row>
            <Row className="Border"></Row>
            <Row xs={1} md={4} style={{ paddingBottom: "50px" }}>
              {item.spareParts.map((item, index) => (
                <Col key={index}>
                  <div className="Container-image" style={{ marginBottom: "20px" }} >
                    <ImageFieldCus url={item.imageName}></ImageFieldCus>
                  </div>
                  <h3 className="title" >
                    {item.nameSparePart}
                  </h3>
                </Col>
              ))}
            </Row>
          </div>
        ))}
        <div style={{borderTopStyle:"solid", paddingTop:"25px", marginTop:"25px"}}>
          <Row style={{ color: "#5A646E" }}>
            <h5 style={{ fontWeight: "bold" }}>
              BẠN ĐÃ SẴN SÀNG TRẢI NGHIỆM CÙNG MITSUBISHI MOTORS VIỆT NAM?
            </h5>
            <br />
            <p>
              Lựa chọn thanh dịch vụ bên dưới hoặc liên hệ nhà phân phối gần
              nhất để tìm hiểu thêm thông tin
            </p>
          </Row>
          <Link to="/SanPham/DangKyLaiThu">
            <Button variant="outline-dark" size="lg" className="MyBorder" >
              ĐĂNG KÝ LÁI THỬ
            </Button>
          </Link>
        </div>
      </Row>
    </>
  );
}

export default SpareParts;