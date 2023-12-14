import {Row, Col, Accordion, Button, Container} from "react-bootstrap"
import {Link,useParams} from "react-router-dom"
import {useState, useEffect} from 'react';
import banner from "../../../Components/Assets/Page/bannerservice1.png"

function Versions({}) {
    const { id } = useParams();
    const [models, setModels] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/models/${id}`);
          setModels(await response.json());
        } catch (error) {
          console.error("Error fetching model details", error);
        }
      };
      fetchData();
    },[])

    const [versions, setVersions] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/versions/modelId=${id}`);
          setVersions(await response.json());
        } catch (error) {
          console.error("Error fetching version details", error);
        }
      };
      fetchData();
    },[])

    const ImageFieldCus = ({ id,url }) => {
        if(url == 'empty' || url == undefined) url = "no-image-available.png"
        else url = url.imageName

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
        
        return imageUrl ? <img height={200} width={400}  src={imageUrl} alt="Image" id={id}/> : null;

      };

      async function handleImageChange(idImg,imageName) {
        const response = await fetch(`http://localhost:8080/image/${imageName}`)
        const blob = await response.blob()
        const imageBlob = URL.createObjectURL(blob)

        let img = document.getElementById(idImg)
        img.setAttribute("src",imageBlob)
      }
    return (<>
    {/* Banner header */}
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>{models.nameModel}</h1>
        </div>
    </Row>

    {/* Title */}
    <Row><h1 style={{textAlign:"center"}}>Trang thiết bị</h1></Row>

    {/* Show and change image */}
    <Row className="justify-content-md-center" style={{paddingBottom:"50px"}}>
        {versions.map((item, index) => (
            <Col key={index} style={{textAlign:"center"}}>
                <ImageFieldCus id={index} url={versions[index].colors[0]}></ImageFieldCus>
                <h4 style={{fontWeight:"bold"}}>{item.nameVersion}</h4>
                <p>Giá {item.price} VNĐ</p>
                <div className="imageButtons">
                    {item.colors.map((colorItem, colorIndex) => (
                        <button style={{backgroundColor:`${colorItem.color}`}} onClick={() => handleImageChange(index,colorItem.imageName)}></button>
                    ))}
                </div>
            </Col>
        ))}
    </Row>

    {/* Information */}
    <Row>
        {versions.map((item,index) => (
            <Col>
                <h5 style={{textAlign:"center"}}>{item.info}</h5>
            </Col>
        ))}
    </Row>

    <Row style={{maxWidth:"100%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Row>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>KÍCH THƯỚC VÀ TRỌNG LƯỢNG</Accordion.Header>
                    <Accordion.Body>
                    <h5>Số chỗ ngồi</h5>
                    <Row style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4>{models.numCarSeat}</h4>
                            </Col>
                        ))}
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>ĐỘNG CƠ VÀ VẬN HÀNH</Accordion.Header>
                    <Accordion.Body>
                    <h5>Dung tích thùng nhiên liệu</h5>
                    <Row style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.gasCap}</h4>
                            </Col>
                        ))}
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>TRUYỀN ĐỘNG VÀ HỆ THỐNG TREO</Accordion.Header>
                    <Accordion.Body>
                    <h5>Phanh trước</h5>
                    <Row style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.frontBrakes}</h4>
                            </Col>
                        ))}
                    </Row>

                    <h5>Phanh sau</h5>
                    <Row style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.rearBrakes}</h4>
                            </Col>
                        ))}
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>NGOẠI THẤT</Accordion.Header>
                    <Accordion.Body>
                    <h5>Đèn LED sương mù trước</h5>
                    <Row style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.frontFogLight}</h4>
                            </Col>
                        ))}
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>NỘI THẤT</Accordion.Header>
                    <Accordion.Body>
                    <h5>Vô lăng và cần số bọc da</h5>
                    <Row style={{backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.wrappedSteeringWheelAndGearLever}</h4>
                            </Col>
                        ))}
                    </Row>
                    
                    <h5>Chất liệu ghế</h5>
                    <Row style={{ backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.seatMaterial}</h4>
                            </Col>
                        ))}
                    </Row>

                    <h5>Tay nắm cửa</h5>
                    <Row style={{ backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.doorHandle}</h4>
                            </Col>
                        ))}
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>AN TOÀN</Accordion.Header>
                    <Accordion.Body>
                    <h5>Túi khí an toàn</h5>
                    <Row style={{ backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.airBag}</h4>
                            </Col>
                        ))}
                    </Row>

                    <h5>Camera lùi</h5>
                    <Row style={{ backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.backCamera}</h4>
                            </Col>
                        ))}
                    </Row>

                    <h5>Chìa khóa có mã chống trộm</h5>
                    <Row style={{ backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.antiTheft}</h4>
                            </Col>
                        ))}
                    </Row>

                    <h5>Khóa cửa từ xa</h5>
                    <Row style={{ backgroundColor:"#F5F5F5", textAlign:"center"}}>
                        {versions.map((item,index) => (
                            <Col>
                                <h4 key={index}>{item.autoLock}</h4>
                            </Col>
                        ))}
                    </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>

        <div style={{borderTopStyle:"solid", paddingTop:"25px", marginTop:"25px", textAlign:"center"}}>
            <Row>
                <h5 style={{color:"red",fontWeight:"bold"}}>BẠN MUỐN LÁI THỬ?</h5><br/>
                <p>Hãy đăng ký lái thử ngay tại nút ở bên dưới!</p>
            </Row>
            <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" >ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
    </Row>
    </>
    );
}

export default Versions