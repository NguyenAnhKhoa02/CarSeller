import {Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import banner from "../../../Components/Assets/bannerservice1.png"
import icon1 from "../../../Components/Assets/allproducticon1.png"
import icon2 from "../../../Components/Assets/allproducticon2.png"
import model1 from "../../../Components/Assets/Models/all-new-xforce-all-product.png"
import model2 from "../../../Components/Assets/Models/xpander-cross-all-product.png"
import { useEffect,useState } from "react"

function AllModels () {
    const [models, setModels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/models/all")
                const data = await response.json();
                const modelsWithImageURLs = data.map(async (item) => {
                    const imageUrlResponse = await fetch(`http://localhost:8080/image/${item.imageName}`);
                    if (imageUrlResponse.ok) {
                        const blob = await imageUrlResponse.blob();
                        const imageUrl = URL.createObjectURL(blob);
                        return {
                            ...item,
                            imageUrl,
                        };
                }});
                const modelsWithResolvedImageURLs = await Promise.all(modelsWithImageURLs);
                setModels(modelsWithResolvedImageURLs);
            } catch (error) {
                console.log("Error fetch data" , error);   
            }
        };
        fetchData()
    },[])
    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>Danh sách xe</h1>
            <p style={{fontSize:"1.5rem"}}>Mang đến cho bạn nhiều sự lựa chọn từ những mẫu xe SUV, một mẫu xe đô thị nhỏ gọn, một mẫu xe dành cho gia đình<br/> hay một chiếc xe bán tải, Mitsubishi chắc chắn sẽ đáp ứng được nhu cầu của bạn.</p>
        </div>
    </Row>
    <Row xs={1} md={2} style={{maxWidth:"85%",margin:"0 auto", paddingTop:"25px",paddingBottom:"50px"}}>
        {models.map((item, index) => (
            <Col key={index} style={{paddingBottom:"50px"}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={item.imageUrl} style={{width:"80%"}}/>
                </div>
                <div style={{textAlign:"justify"}}>
                    <h3 style={{fontWeight:"bold",marginBottom:"20px"}}>{item.nameModel}</h3>
                    <h5 style={{fontWeight:"normal",marginBottom:"20px"}}>Giá từ {item.price} VNĐ</h5>
                    <p>{item.info}</p>
                    <div style={{display:"flex",alignContent:"center",marginTop:"10px",marginBottom:"10px"}}>
                        <img src={icon1} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>{item.gas}</p>
                        <img src={icon2} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>{item.seat} chỗ</p>
                    </div>
                    <Link to={`/SanPham/TatCaXe/${item.id}`} key={item.id}><Button variant="outline-dark" size="lg" className="MyBorder">KHÁM PHÁ</Button></Link>
                </div>
            </Col>
        ))}
        <Col style={{paddingBottom:"50px"}}>
            <img src={model1}/>
            <div style={{textAlign:"justify"}}>
                <h3 style={{fontWeight:"bold",marginBottom:"20px"}}>All-New Xforce</h3>
                <h5 style={{fontWeight:"normal",marginBottom:"20px"}}>Chưa công bố</h5>
                <p>NGƯỜI BẠN ĐỒNG HÀNH LÝ TƯỞNG NHẤT CHO CUỘC SỐNG NĂNG ĐỘNG! All-New Xforce - Mẫu xe SUV 5 chỗ rộng rãi được phát triển dựa trên nhu cầu sử dụng các dòng xe SUV tại khu vực ASEAN. Không chỉ có diện mạo thanh lịch, mạnh mẽ mà còn sở hữu không gian rộng rãi với nhiều vị trí để đồ tiện dụng, hướng đến cảm giác lái an toàn, tự tin trong nhiều điều kiện khác nhau.</p>
                <div style={{display:"flex",alignContent:"center",marginTop:"10px",marginBottom:"10px"}}>
                    <img src={icon1} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>Xăng</p>
                    <img src={icon2} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>5 chỗ</p>
                </div>
                <Link to="/SanPham/TatCaXe"><Button variant="outline-dark" size="lg" className="MyBorder">KHÁM PHÁ</Button></Link>
            </div>
        </Col>
        <Col style={{paddingBottom:"50px"}}>
            <img src={model2}/>
            <div style={{textAlign:"justify"}}>
                <h3 style={{fontWeight:"bold",marginBottom:"20px"}}>Xpander Cross</h3>
                <h5 style={{fontWeight:"normal",marginBottom:"20px"}}>Giá từ 698.000.000 VNĐ</h5>
                <p>TỰ TIN VỮNG LÁI, THOẢI MÁI PHIÊU LƯU! Nổi bật với phong cách SUV mạnh mẽ, khoang nội thất sang trọng với vô lăng 4 chấu cùng đồng hồ điện tử 8-inch, Xpander Cross còn mang đến sự tự tin khi cầm lái cùng hệ thống kiểm soát vào cua chủ động AYC</p>
                <div style={{display:"flex",alignContent:"center",marginTop:"10px",marginBottom:"10px"}}>
                    <img src={icon1} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>Xăng</p>
                    <img src={icon2} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>7 chỗ</p>
                </div>
                <Link to="/SanPham/TatCaXe"><Button variant="outline-dark" size="lg" className="MyBorder">KHÁM PHÁ</Button></Link>
            </div>
        </Col>
    </Row>
    </>
    );
}

export default AllModels