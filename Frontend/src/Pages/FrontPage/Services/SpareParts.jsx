import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import n1 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot1.png";
import n2 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot2.png";
import n3 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot3.png";
import n4 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot4.png";
import n5 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot5.png";
import n6 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot6.png";
import n7 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot7.png";
import n8 from "../../../Components/Assets/ForDatabase/Accessary of car/Nhot8.jpg";
import additives1 from "../../../Components/Assets/ForDatabase/Additives/additives1.jpg";
import additives2 from "../../../Components/Assets/ForDatabase/Additives/additives2.jpg";
import additives3 from "../../../Components/Assets/ForDatabase/Additives/additives3.jpg";
import additives4 from "../../../Components/Assets/ForDatabase/Additives/additives4.png";
import additives5 from "../../../Components/Assets/ForDatabase/Additives/additives5.jpg";
import additives6 from "../../../Components/Assets/ForDatabase/Additives/additives6.jpg";
import additives7 from "../../../Components/Assets/ForDatabase/Additives/additives7.jpg";
import additives8 from "../../../Components/Assets/ForDatabase/Additives/additives8.jpg";
import sparePart1 from "../../../Components/Assets/ForDatabase/spareParts/sparePart1.jpg";
import sparePart2 from "../../../Components/Assets/ForDatabase/spareParts/sparePart2.jpg";
import sparePart3 from "../../../Components/Assets/ForDatabase/spareParts/sparePart3.jpg";
import sparePart4 from "../../../Components/Assets/ForDatabase/spareParts/sparePart4.jpg";
import sparePart5 from "../../../Components/Assets/ForDatabase/spareParts/sparePart5.jpg";
import sparePart6 from "../../../Components/Assets/ForDatabase/spareParts/sparePart6.jpg";
import sparePart7 from "../../../Components/Assets/ForDatabase/spareParts/sparePart7.jpg";
import sparePart8 from "../../../Components/Assets/ForDatabase/spareParts/sparePart8.jpg";
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