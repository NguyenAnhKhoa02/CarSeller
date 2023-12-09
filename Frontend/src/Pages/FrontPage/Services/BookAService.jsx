import {Row, Button, Form, FloatingLabel} from "react-bootstrap"
import banner from "../../../Components/Assets/bannerservice1.png"
import React, { useEffect, useState } from "react";  

function BookAService () {
    const [models,setModels] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("http://localhost:8080/models/all")
            setModels(await response.json())
        }
        fetchData()
    },[])

    const [services, setServices] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("http://localhost:8080/services/all")
            setServices(await response.json())
        }
        fetchData()
    },[])
    console.log(services)

    const [fullName,setFullName] = React.useState();
    const [email,setEmail] = React.useState();
    const [numberPhone,setNumberPhone] = React.useState();
    const [licensePlate,setLicensePlate] = React.useState();
    const [modelId,setModel] = React.useState();
    const [distributionCenter,setDistributionCenter] =React.useState();
    const [serviceId,setService] = React.useState();
    const [date,setDate] = React.useState();
    const [time,setTime] = React.useState();

    const [checked,setChecked] = React.useState();

    const handleCheckBoxChange = (e)=> {
        return setChecked(e.target.checked ? "checked":"unchecked")
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const servicePlan = {fullName,email,numberPhone,licensePlate,modelId,distributionCenter,serviceId,date,time}

        if(checked =="checked"){
            alert("gửi gòi")
                fetch("http://localhost:8080/service_Plans/save", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(servicePlan)
            })
            } else {
            alert("tích checkbox")
             }

      }
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered"><h1 style={{fontWeight:"bold", fontSize:"3rem"}}>ĐẶT LỊCH DỊCH VỤ</h1></div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Form onSubmit={handleSubmit}>
            <div style={{textAlign:"center", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>1. Nhập thông tin cá nhân</h3>
            </div>
            <FloatingLabel controlId="name" label="HỌ VÀ TÊN *" className="mb-3">
                <Form.Control  type="text" placeholder="name" 
                onChange={(e)=> setFullName(e.target.value)} 
                
                />
              
            </FloatingLabel>
            <FloatingLabel controlId="email" label="ĐỊA CHỈ EMAIL" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" 
                onChange={(e)=> setEmail(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel controlId="phonenumber" label="SỐ ĐIỆN THOẠI *" className="mb-3">
                <Form.Control type="tel" placeholder="00000"
                 onChange={(e)=> setNumberPhone(e.target.value)}
                 />
            </FloatingLabel>
            <FloatingLabel controlId="typecar" label="MẪU XE *" className="mb-3">
                <Form.Select aria-label="Chọn mẫu xe" onChange={(e)=> setModel(e.target.selectedIndex)}>
                    {models.map((item,index) => (
                        <option key={index}>{item.nameModel}</option>
                    ))}
                </Form.Select>
    
            </FloatingLabel>
            <FloatingLabel controlId="carnumber" label="BIỂN SỐ XE">
                <Form.Control type="text" placeholder="carnumber" 
                onChange={(e)=> setLicensePlate(e.target.value)}
                />
            </FloatingLabel>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>2. Chọn loại dịch vụ</h3>
            </div>
            <FloatingLabel controlId="typeservice" label="DỊCH VỤ *" className="mb-3">
                <Form.Select aria-label="Chọn loại dịch vụ" 
                onChange={(e)=> setService(e.target.selectedIndex)}
                >
                    {services.map((item,index) => (
                        <option value="">{item.nameService}</option>
                    ))}
                </Form.Select>
            </FloatingLabel>
            <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                <h3 style={{fontWeight:"bold"}}>3. Chọn nhà phân phối</h3>
            </div>
            <FloatingLabel controlId="distributor" label="NHÀ PHÂN PHỐI *" className="mb-3">
                <Form.Select aria-label="Chọn nhà phân phối"
                 onChange={(e)=> setDistributionCenter(e.target.value)}
                 >
                    <option>Chọn nhà phân phối</option>
                    <option value="TP.HCM">Thành phố Hồ Chí Minh</option>
                    <option value="HaNoi">Thành phố Hà Nội</option>
                    <option value="GiaLai">Tỉnh Gia Lai</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="date" label="NGÀY ĐẶT LỊCH *"  className="mb-3">
                <Form.Control type="date" min={new Date().toISOString().slice(0, 10)} placeholder="1/1/2024"
                onChange={(e)=> setDate(e.target.value)}
                 />
            </FloatingLabel>
            <FloatingLabel controlId="time" label="GIỜ ĐẶT LỊCH *" className="mb-3">
                <Form.Control type="time" placeholder="6:00 SA" 
                onChange={(e)=> setTime(e.target.value)}/>
            </FloatingLabel>
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

export default BookAService