import {Row, Col, Button, Modal} from "react-bootstrap";
import {useEffect,useState} from "react";
import banner from "../../../Components/Assets/Page/bannerservice1.png"

function Promotion() {
    const [promotions, setPromotions] = useState([]);
    const [modalStates, setModalStates] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/promotions/all")
                const data = await response.json();
                const promotionsData = data.map(async (item) => {
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
                const Promotions = await Promise.all(promotionsData);
                setPromotions(Promotions);
            } catch (error) {
                console.log("Error fetch data" , error);   
            }
        };
        fetchData()
    },[])

    const handleShow = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = true;
        setModalStates(newModalStates);
    };

    const handleClose = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = false;
        setModalStates(newModalStates);
    };

    return (<>
    <Row style={{position:"relative", textAlign:"center", color:"white"}}>
        <img src={banner} height="316"/>
        <div className="centered">
            <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>KHUYẾN MÃI</h1>
            <p style={{fontSize:"1.5rem"}}>Ngập tràn ưu đãi khi mua xe Mitsubishi ngay trong tháng này. Tìm hiểu ngay!</p>
        </div>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingTop:"50px"}}>
        {promotions.map((item, index) => (
            <Row key={index} style={{paddingBottom:"50px"}}>
                <Col>
                    <img src={item.imageUrl} style={{maxWidth:"80%"}}/>
                </Col>
                <Col style={{alignSelf:"center"}}>
                    <p style={{fontSize:"32px", fontWeight:"bold"}}>{item.title}</p>
                    <Button className={"PromotionButton"} variant="link" size="lg" onClick={() => handleShow(index)}>
                        Chi tiết
                    </Button>
                    <Modal show={modalStates[index]} fullscreen={true} onHide={() => handleClose(index)}>
                        <Modal.Header closeButton>
                        <Modal.Title>{item.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><h5 style={{textAlign:"justify"}}>{item.content}</h5></Modal.Body>
                    </Modal>
                </Col>
            </Row>
        ))}
    </Row>
    </>
    )   
}

export default Promotion