import {Row,Carousel,Button,Card,CardGroup} from "react-bootstrap";
import {useEffect,useState} from "react";
import Slider from "react-slick";
import banner1 from "../../Components/Assets/Page/banner1.png";
import banner2 from "../../Components/Assets/Page/banner2.png";
import banner3 from "../../Components/Assets/Page/banner3.png";
import banner4 from "../../Components/Assets/Page/banner4.png";
import banner5 from "../../Components/Assets/Page/banner5.png";
import banner6 from "../../Components/Assets/Page/banner6.png";
import dv1 from "../../Components/Assets/Page/dv1.png";
import dv2 from "../../Components/Assets/Page/dv2.png";
import dv3 from "../../Components/Assets/Page/dv3.png";
import dv4 from "../../Components/Assets/Page/dv4.png";

function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: false,
    speed: 500
  }; 
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
  },[]);
  
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
  return (<>
      <Carousel fade indicators={false} prevIcon={false} nextIcon={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={banner1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={banner2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={banner3}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={banner4}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={banner5}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={banner6}
          />
        </Carousel.Item>
      </Carousel>
      <Row style={{maxWidth:"100%",margin:"0 auto", textAlign:"justify"}}>
        <Row className="Title">
          <h3>DANH MỤC MẪU XE</h3>
        </Row>
        <Slider {...settings}>
          {models.map((item, index) => (
          <div key={index} >
            <Card className="MyCard">
              <Card.Img style={{height:"350px"}} variant="top" src={item.imageUrl} />
              <Card.Body style={{textAlign: "center", }}>
                <Card.Title><h5>{item.nameModel}</h5></Card.Title>
                <Card.Text>
                  <LowestPrice id={item.id}></LowestPrice>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          ))}
        </Slider>
        <Row className="Title">
          <h3>DANH MỤC DỊCH VỤ</h3>
        </Row>
        <CardGroup style={{paddingLeft:"5px"}}>
          <Card style={{alignItems:"center"}}>
            <Card.Img variant="top" className="image-resize" src={dv1} />
            <Card.Body style={{textAlign: "center"}}>
              <Card.Title>CHÍNH SÁCH BẢO HÀNH</Card.Title>
              <Card.Text>
              Chính sách mang lại những sửa chữa cần thiết, sử dụng những phụ tùng mới hoặc những phụ tùng tái chế cho xe của Khách hàng nằm trong chế độ được bảo hành.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{alignItems:"center"}}>
            <Card.Img variant="top" className="image-resize" src={dv2} />
            <Card.Body style={{textAlign: "center"}}>
              <Card.Title>DỊCH VỤ BẢO DƯỠNG</Card.Title>
              <Card.Text>
              Dịch vụ kiểm tra, bảo dưỡng một cách định kỳ để đảm bảo chiếc xe của Khách hàng luôn được vận hành hiệu quả.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{alignItems:"center"}}>
            <Card.Img variant="top" className="image-resize" src={dv3} />
            <Card.Body style={{textAlign: "center"}}>
              <Card.Title>DỊCH VỤ SỬA CHỮA</Card.Title>
              <Card.Text>
              Ngoài dịch vụ bảo dưỡng và sửa chữa những hiện tượng bất thường trên xe, Mitsubishi cũng cung cấp dịch vụ sửa chữa đối với những hư hỏng do va chạm mà chiếc xe của Khách hàng gặp phải trong quá trình sử dụng.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{alignItems:"center"}}>
            <Card.Img variant="top" className="image-resize" src={dv4} />
            <Card.Body style={{textAlign: "center"}}>
              <Card.Title>KIỂM TRA VÀ TRIỆU HỒI</Card.Title>
              <Card.Text>
              Khách hàng có thể kiểm tra xem xe của mình có thuộc các chương trình kiểm tra & triệu hồi hay không.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      </>
  );
}

export default Home