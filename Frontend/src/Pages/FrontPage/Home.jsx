import {Row,Carousel,Button,Card,CardGroup} from "react-bootstrap";
import Slider from "react-slick";
import banner1 from "../../Components/Assets/banner1.png";
import banner2 from "../../Components/Assets/banner2.png";
import banner3 from "../../Components/Assets/banner3.png";
import banner4 from "../../Components/Assets/banner4.png";
import banner5 from "../../Components/Assets/banner5.png";
import banner6 from "../../Components/Assets/banner6.png";
import car1 from "../../Components/Assets/Cars/car1.png";
import car2 from "../../Components/Assets/car2.png";
import car3 from "../../Components/Assets/car3.png";
import car4 from "../../Components/Assets/car4.png";
import dv1 from "../../Components/Assets/dv1.png";
import dv2 from "../../Components/Assets/dv2.png";
import dv3 from "../../Components/Assets/dv3.png";
import dv4 from "../../Components/Assets/dv4.png";
import "./Home.css"

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
        <Row className="Title">
          <h3>DANH MỤC XE</h3>
        </Row>
        <Slider {...settings}>
          <div>
            <Card className="MyCard">
              <Card.Img variant="top" src={car1} />
              <Card.Body style={{textAlign: "center", }}>
                <Card.Title>XPANDER CROSS 2023</Card.Title>
                <Card.Text>
                  Giá từ 698.000.000 VNĐ
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={car2} />
              <Card.Body style={{textAlign: "center", }}>
                <Card.Title>NEW OUTLANDER</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={car3} />
              <Card.Body style={{textAlign: "center", }}>
                <Card.Title>NEW XPANDER</Card.Title>
                <Button variant="secondary">Xem thêm</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={car4} />
              <Card.Body style={{textAlign: "center", }}>
                <Card.Title>XPANDER CROSS</Card.Title>
                <Button variant="secondary">Xem thêm</Button>
              </Card.Body>
            </Card>
          </div>
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
        </>
  );
}

export default Home