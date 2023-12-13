import {Row, Col, Button} from "react-bootstrap"
import {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import banner from "../../../Components/Assets/Page/bannerservice1.png"
import icon1 from "../../../Components/Assets/Page/allproducticon1.png"
import icon2 from "../../../Components/Assets/Page/allproducticon2.png"

function AllModels () {
    const [models, setModels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/models/all")
                const data = await response.json();
                const modelsData = data.map(async (item) => {
                    const imageUrlResponse = await fetch(`http://localhost:8080/image/${item.imageName}`);
                    if (imageUrlResponse.ok) {
                        const blob = await imageUrlResponse.blob();
                        const imageUrl = URL.createObjectURL(blob);
                        return {
                            ...item,
                            imageUrl,
                        };
                }else return {...item,imageUrl: null}
            });
                const Models = await Promise.all(modelsData);
                setModels(Models);
            } catch (error) {
                console.log("Error fetch data" , error);   
            }
        };
        fetchData()
    },[])

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
        return <h5>Giá từ {lowestPrice} vnđ</h5>
    }

    const FuelAndSeat = ({model}) => {
        let nameFuel
        if(model.fuel == "gasoline") nameFuel = "Xăng"
        if(model.fuel == "dieselFuel") nameFuel = "Dầu Diesel"
        return(
        <>
            <div style={{display:"flex",alignContent:"center",marginTop:"10px",marginBottom:"10px"}}>
                <img src={icon1} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>{nameFuel}</p>
                <img src={icon2} style={{width:"30px", height:"30px", marginRight:"10px"}}/><p style={{fontWeight:"bold"}}>{model.numCarSeat} chỗ</p>
            </div>
        </>
        )
    }

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
            console.log(item),
            <Col key={index} style={{paddingBottom:"50px"}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={item.imageUrl} style={{width:"80%"}}/>
                </div>
                <div style={{textAlign:"justify"}}>
                    <h3 style={{fontWeight:"bold",marginBottom:"20px"}}>{item.nameModel}</h3>
                    <LowestPrice id={item.id}></LowestPrice>
                    <p>{item.info}</p>  
                    <FuelAndSeat model={item}></FuelAndSeat>
                    <Link to={`/SanPham/TatCaXe/${item.id}`} key={item.id}><Button variant="outline-dark" size="lg" className="MyBorder">KHÁM PHÁ</Button></Link>
                </div>
            </Col>
        ))}
    </Row>
    </>
    );
}

export default AllModels