import {Row, Col, Button, Form, FloatingLabel, Card} from "react-bootstrap"
import Slider from "react-slick";
import banner from "../../../Components/Assets/Page/bannerservice1.png"
import React,{ useEffect, useRef, useState } from "react";

function BookATestDrive () {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      arrows: false,
      speed: 500
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

    // get all distribution centers
    const [distributionCenters,setDistributionCenters] = useState([])
    useEffect(() => {
        const fetchData = async() =>{
            const response = await fetch(`http://localhost:8080/distributionCenters/all`)
            setDistributionCenters(await response.json())
        }
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

    let curRef = useRef(null)
    const [versions,setVersions] = useState([])
    const [modelId,setModelId] = useState([])
    async function handleClick(idModel) {
        const response = await fetch(`http://localhost:8080/versions/modelId=${idModel}`)
        setVersions(await response.json())
        setModelId(idModel)
        curRef.current.scrollIntoView()
    }   


    const [fullName,setFullName] = useState([])
    const [email,setEmail] = useState([])
    const [numberPhone,setNumberPhone] = useState([])
    const [versionId,setVersionId] = useState([])
    const [distributionCenterId,setDistributionCenterId] = useState([])
    const [carPD,setCarPD] = useState([])
    const [checked,setChecked] = React.useState()

    const handleCheckBoxChange = (e)=> {
        return setChecked(e.target.checked ? "checked":"unchecked")
        
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(checked == undefined || checked == "unchecked"){
            alert("Check privacy")
            return
        }

        const testingRegister = {versionId,fullName,email,numberPhone,distributionCenterId,carPD,modelId}
        console.log(testingRegister)
        fetch("http://localhost:8080/testing_Registers/save",
        {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(testingRegister)
        })
    }

    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>ĐĂNG KÝ LÁI THỬ</h1>
            <p style={{fontSize:"1.5rem"}}>Trải nghiệm ngay các mẫu xe của Mitsubishi và nhận những phần quà hấp dẫn!</p>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Form onSubmit={handleSubmit}>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>1. Chọn mẫu xe của bạn</h3>
            </div>
            <Slider focusOnSelect {...settings}>
                {models.map((item,index) => (
                    <>
                        <Card onClick={()=>handleClick(item.id)} className="MyCard" style={{height:"400px", width:"250px", paddingLeft:"10px"}}>
                            <Card.Header style={{marginBottom:"100px", textAlign:"center"}}>Click to choose</Card.Header>
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
                <h3 style={{fontWeight:"bold"}}>2. Thông tin cá nhân</h3>
            </div>
            <FloatingLabel ref={curRef} controlId="name" label="HỌ VÀ TÊN *" className="mb-3">
                <Form.Control required type="text" placeholder="name" onChange={(e) => setFullName(e.target.value)}/>
            </FloatingLabel>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="email" label="ĐỊA CHỈ EMAIL (TUỲ CHỌN)" className="mb-3">
                        <Form.Control required type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phonenumber" label="SỐ ĐIỆN THOẠI *" className="mb-3">
                        <Form.Control required type="tel" placeholder="00000" onChange={(e) => setNumberPhone(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel controlId="version" label="PHIÊN BẢN" className="mb-3">
                <Form.Select required aria-label="Chọn phiên bản" onChange={(e) => setVersionId(e.target.value)}>
                    <option value="">Chon phien ban</option>
                    {versions.map((item,index) => (
                        <option value={item.id}>{item.nameVersion}</option>
                    ))}
                </Form.Select>
            </FloatingLabel>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>3. Chọn nhà phân phối</h3>
            </div>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="distributor" label="NHÀ PHÂN PHỐI *" className="mb-3">
                        <Form.Select required aria-label="Chọn nhà phân phối" onChange={(e) => setDistributionCenterId(e.target.value)}>
                            <option value="">Chọn nhà phân phối</option>
                            {distributionCenters.map((item,index) => (
                                <option value={item.id}>{item.nameDistributionCenter}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel required controlId="requirement" label="BẠN CÓ NHU CẦU MUA XE TRONG BAO LÂU?*" className="mb-3">
                        <Form.Select required aria-label="Chọn nhà phân phối" onChange={(e) => setCarPD(e.target.value)}>
                            <option value="">Chọn nhu cầu</option>
                            <option value="1 tháng">1 tháng</option>
                            <option value="3 tháng">3 tháng</option>
                            <option value="6 tháng">6 tháng</option>
                            <option value="Trên 6 tháng">Trên 6 tháng</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <p style={{color:"gray"}}>ĐIỀU KIỆN & ĐIỀU KHOẢN VỀ CHÍNH SÁCH BẢO MẬT*</p>
            <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Tôi xác nhận đồng ý nhận thông tin liên quan đến dịch vụ chăm sóc khách hàng, khuyến mãi, hoặc các thông tin tiếp thị sản phẩm và dịch vụ được cung cấp bởi MMV, các nhà phân phối ủy quyền của MMV và các đối tác kinh doanh được chỉ định bởi MMV."
                    onChange={handleCheckBoxChange}
                />
            </div>
            <Row><Button variant="outline-dark" type="submit" size="lg" className="MyBorder2">ĐẶT LỊCH</Button></Row>
        </Form>
    </Row>
    </>
    );
}

export default BookATestDrive