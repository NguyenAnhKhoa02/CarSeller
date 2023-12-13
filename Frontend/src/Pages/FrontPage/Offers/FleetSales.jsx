import {Row, Col, Button, Form, FloatingLabel, Card} from "react-bootstrap"
import Slider from "react-slick";
import banner from "../../../Components/Assets/Page/banneroffers1.png"
import icon1 from "../../../Components/Assets/Page/fleetsalesicon1.png"
import icon2 from "../../../Components/Assets/Page/fleetsalesicon2.png"
import icon3 from "../../../Components/Assets/Page/fleetsalesicon3.png"
import icon4 from "../../../Components/Assets/Page/fleetsalesicon4.png"
import icon5 from "../../../Components/Assets/Page/fleetsalesicon5.png"
import icon6 from "../../../Components/Assets/Page/fleetsalesicon6.png"
import React,{ useEffect, useRef, useState } from "react";

function FleetSales() {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: false  ,
        centerPadding: "0px",
        slidesToShow: 3,
        arrows: true,
        speed: 500,
      }; 
      
    // get all models
    const [models,setModels] = useState([])
    useEffect(() => {
        const fetchData =  async () => {
            try {
                const response = await fetch(`http://localhost:8080/models/all`);
                const data = await response.json()

                const modelDatas = data.map(async(item) => {
                    const imageResponse = await fetch(`http://localhost:8080/image/${item.imageName}`)
                    
                    if(imageResponse.ok){
                        const blob = await imageResponse.blob()
                        const imageURL = await URL.createObjectURL(blob)
                        return{
                            ...item,
                            imageURL
                        };
                    }else
                        return{
                            ...item,
                            imageURL:null
                        }
                });
                
                setModels(await Promise.all(modelDatas))

            } catch (error) {
                console.log("Error:" + error)
            }
        };
        fetchData()
    },[])

    // show lowest price    
    const LowestPrice = ({id}) => {
        let lowestPrice = 0
        
        const [versions,setVersions] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/versions/modelId=${id}`);
                    setVersions(await response.json());
                } catch (error) {
                    console.log("Error fetch data",error);
                }
            };
            fetchData()
        },[])

        for (let index = 0; index < versions.length; index++) {
            const element = versions[index].price;
            if(lowestPrice == 0) lowestPrice = element
            if(lowestPrice > element) lowestPrice = element
        }

        return <Card.Text>Giá từ {lowestPrice} vnđ</Card.Text>
    }
    
    var lastId = null
    var currentModelId = null
    async function handleClick(idModel) {
        if(lastId != null){
            var headerLast = document.getElementById(lastId)
            headerLast.innerHTML = "none"
            headerLast.style.color = "white"
            headerLast.style.backgroundColor = "white"
        }
        
        var header = document.getElementById(idModel)
        header.innerHTML = "Choosed"
        header.style.color = "white"
        header.style.backgroundColor = "green"

        currentModelId = idModel
        lastId = idModel
    }  

    const [fullName,setFullName] = useState([])
    const [email,setEmail] = useState([])
    const [phoneNumber,setPhoneNumber] = useState([])
    const [companyAddress,setCompanyAddress] = useState([])
    const [companyPhone, setCompanyPhone] = useState([])
    const [contactName,setContactName] = useState([])
    const [quantity, setQuantity] = useState([])
    const handleSubmit = async(e) =>{
        e.preventDefault();


        if(currentModelId == null){
            alert("Plaese choose model!")
            return
        }
        
        let modelId = currentModelId
        const fleetSale = {modelId,fullName,email,phoneNumber,companyAddress,companyPhone,contactName,quantity}
        console.log(fleetSale)
        
        fetch("http://localhost:8080/fleetSales/save",
        {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fleetSale)
        })
    }

    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="875"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem",marginBottom:"550px",color:"black"}}>BÁN HÀNG DỰ ÁN</h1>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Row>
            <p>Công ty TNHH Ô tô Mitsubishi Việt Nam (MMV) cam kết mang đến cho Khách hàng giá trị cao nhất từ sản phẩm chất lượng đến dịch vụ tận tâm, phục vụ tốt nhất nhu cầu mua xe của quý khách. Với các sản phẩm góp mặt ở hầu hết các phân khúc, chúng tôi đáp ứng nhu cầu đa dạng của nhiều nhóm khách hàng:</p>
            <Row style={{fontWeight:"bold"}}>
                <Col style={{display:"flex",alignContent:"center"}}>
                <img src={icon1} style={{width:"30px",height:"30px",marginRight: "10px"}}/>
                <p>Khách hàng Cá nhân/Doanh nghiệp</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                <img src={icon2} style={{width:"30px",height:"30px",marginRight: "10px"}}/>
                <p>Khách hàng kinh doanh vận tải/ cho thuê xe</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                <img src={icon3} style={{width:"30px",height:"30px",marginRight: "10px"}}/>
                <p>Khách hàng nhà nước và các dự án</p>
                </Col>
            </Row>
            <p>Chúng tôi cam kết mang đến những gói sản phẩm phù hợp với những lợi ích dành riêng cho Quý khách:</p>
            <Row style={{fontWeight:"bold"}}>
                <Col style={{display:"flex",alignContent:"center"}}>
                    <img src={icon4} style={{width:"30px",height:"30px",marginRight: "10px"}}/>                
                    <p>Chính sách ưu đãi đặc biệt về giá</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                    <img src={icon5} style={{width:"30px",height:"30px",marginRight: "10px"}}/>                
                    <p>Đội ngũ hỗ trợ tư vấn hỗ trợ chuyên nghiệp</p>
                </Col>
                <Col style={{display:"flex",alignContent:"center"}}>
                    <img src={icon6} style={{width:"30px",height:"30px",marginRight: "10px"}}/>                
                    <p>Dịch vụ giao xe và chăm sóc rộng khắp toàn quốc</p>
                </Col>
            </Row>
            <p>Quý khách có nhu cầu tư vấn mua xe ô tô cho dự án của mình và mong muốn nhận báo giá ưu đãi theo số lượng, vui lòng nhập thông tin bảng bên dưới</p>
        </Row>
        <Form action="/action_page.php">
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>1. Chọn mẫu xe</h3>
            </div>
            <Slider prevArrow={<Button/>} nextArrow={<Button/>} focusOnSelect {...settings}>
                {models.map((item,index) => (
                    <>
                        <Card onClick={()=>handleClick(item.id)} className="MyCard" style={{height:"400px", width:"250px", paddingLeft:"10px"}}>
                            <Card.Header id={item.id}  style={{color:"white",backgroundColor:"white", marginBottom:"100px", textAlign:"center"}}>None</Card.Header>
                            <Card.Img variant="center" src={item.imageURL}/>
                            <Card.Body  style={{textAlign: "center"}}>
                                <Card.Title>{item.nameModel}</Card.Title>
                                <LowestPrice id={item.id} />
                            </Card.Body>
                        </Card>
                    </>

                ))}
            </Slider>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>2. Nhập thông tin của bạn</h3>
            </div>
            <FloatingLabel controlId="name" label="HỌ VÀ TÊN *" className="mb-3">
                <Form.Control onChange={(e) => setFullName(e.target.value)} required type="text" placeholder="name" />
            </FloatingLabel>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="email" label="ĐỊA CHỈ EMAIL *" className="mb-3">
                        <Form.Control onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phonenumber" label="SỐ ĐIỆN THOẠI *" className="mb-3">
                        <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} required type="tel" placeholder="00000" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="address" label="ĐỊA CHỈ CÔNG TY *" className="mb-3">
                        <Form.Control onChange={(e) => setCompanyAddress(e.target.value)} required type="text" placeholder="tp.hcm" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phonenumber2" label="SỐ ĐIỆN THOẠI CÔNG TY *" className="mb-3">
                        <Form.Control onChange={(e) => setCompanyPhone(e.target.value)} required type="tel" placeholder="00000" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="tradename" label="TÊN GIAO DỊCH *" className="mb-3">
                        <Form.Control onChange={(e) => setContactName(e.target.value)} required type="text" placeholder="new trade" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="quantity" label="SỐ LƯỢNG *" className="mb-3">
                        <Form.Control onChange={(e) => setQuantity(e.target.value)} required type="number" placeholder="00000" />
                    </FloatingLabel>
                </Col>
            </Row>
            <p style={{color:"gray"}}>ĐIỀU KIỆN & ĐIỀU KHOẢN VỀ CHÍNH SÁCH BẢO MẬT*</p>
            <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Tôi xác nhận đồng ý nhận thông tin liên quan đến dịch vụ chăm sóc khách hàng, khuyến mãi, hoặc các thông tin tiếp thị sản phẩm và dịch vụ được cung cấp bởi MMV, các nhà phân phối ủy quyền của MMV và các đối tác kinh doanh được chỉ định bởi MMV."
                    required
                />
            </div>
            <Row><Button onClick={handleSubmit} variant="outline-dark" type="submit" size="lg" className="MyBorder2">GỬI THÔNG TIN</Button></Row>
        </Form>
    </Row>
    </>
    );
}

export default FleetSales