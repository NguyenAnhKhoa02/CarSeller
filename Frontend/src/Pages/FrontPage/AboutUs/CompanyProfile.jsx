import {Row} from "react-bootstrap"
import banner from "../../../Components/Assets/CompanyProfile.jpg"

function CompanyProfile () {
    return (<>
    <Row>
        <img src={banner} height="650"/>
    </Row>
    <Row style={{maxWidth:"80%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <Row>
            <h1 style={{textAlign:"center" ,fontSize:"80px" ,fontWeight:"bold"}}>Giới thiệu công ty</h1>
            <p style={{textAlign:"center" ,fontSize:"24px"}}>Thành lập năm 1994 như là nhà phân phối của Mitsubishi Motors – Công ty TNHH ô tô Mitsubishi Việt Nam là một trong những công ty liên doanh sản xuất ô tô đầu tiên ở Việt nam. Với tiêu chí cạnh tranh, sáng tạo và luôn hướng về khách hàng cùng những chiến lược đúng đắn, chúng tôi tự hào được đánh giá là một công ty lắp ráp và phân phối ô tô có uy tín trên toàn Việt Nam hiện nay.</p>
            <p style={{textAlign:"center" ,fontSize:"24px" ,fontWeight:"bold" ,color:"#222222" ,margin:"20px 0"}}>Các bên liên doanh:</p>
            <Row style={{textAlign:"center" ,fontSize:"24px" ,color:"GrayText" ,paddingBottom:"50px"}}>
                <p>Công ty sản xuất ô tô Mitsubishi (Nhật Bản)<br/>
                Công ty thương mại Mitsubishi (Nhật Bản)<br/>
                Công ty xuất nhập khẩu & hợp tác đầu tư giao thông vận tải (Việt Nam)</p>
            </Row>
        </Row>
        <Row>
            <h1 style={{textAlign:"center" ,fontSize:"80px" ,fontWeight:"bold" ,margin:"50px 0"}}>Lịch sử và Thành tựu</h1>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>1994</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 9</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Công ty TNHH LDSX ô tô Ngôi Sao được thành lập</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>1995</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 3</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi L300 được giới thiệu ra thị trường</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>1996</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 3</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Proton Wira được giới thiệu</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Pajero thế hệ thứ 2 được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>1998</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 4</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Giới thiệu Mitsubishi Jolie</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2000</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 5</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Lancer hoàn toàn mới được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2001</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 12</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Số lượng xe bán ra đạt 5.000 chiếc</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2003</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 9</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Số lượng xe bán ra đạt 10.000 chiếc</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2005</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 7</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Grandis được giới thiệu</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Số lượng xe bán ra đạt 20.000 chiếc</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2008</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 3</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Chuyển thành công ty TNHH và bổ sung chức năng nhập khẩu xe nguyên chiếc</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 9</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Zinger được giới thiệu</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 12</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Triton được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2011</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Pajero Sport được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2013</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 7</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Mirage được nhập khẩu nguyên chiếc từ Thái Lan</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2014</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng1</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>- Mitsubishi Attrage được giới thiệu<br/>- Mitsubishi Outlander Sport được giới thiệu<br/>- Mitsubishi Pajero thế hệ thứ 4 được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2015</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 5</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Triton thế hệ thứ 5 được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2016</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 3</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Đổi tên thành Công ty TNHH Ô tô Mitsubishi Việt Nam</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Outlander nhập khẩu từ Nhật Bản, mẫu xe đầu tiên được áp dụng thiết kế Dynamic Shield</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2017</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 1</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Phiên bản Mitsubishi Pajero Sport hoàn toàn mới được giới thiệu, tiếp tục được áp dụng thiết kế Dynamic Shield</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2018</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 1</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Xuất xưởng chiếc xe Outlander đầu tiên được lắp ráp tại Việt Nam</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mẫu xe Crossover MPV được giới thiệu ra thị trường Việt Nam, áp dụng thiết kế Dynamic Shield thế hệ 2</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 10</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>MMV giới thiệu nhận diện thương hiệu mới với thông điệp Drive your Ambition - Dẫn lối khát vọng</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2019</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 1</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Triton mới được giới thiệu</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 6</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi bảo trợ đội đua off-road chuyên nghiệp đầu tiên tại Việt Nam & tham gia cuộc đua Asian Cross Country Rally tại Thái Lan</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Cột mốc doanh số 10.000 xe Xpander bán ra tại thị trường Việt Nam</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 9</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Kỷ niệm 25 năm Mitsubishi Motors Việt Nam có mặt tại Việt Nam, giới thiệu Outlander, Pajero Sport và Xpander phiên bản kỷ niệm 25 năm</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2020</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 3</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Attrage mới với thiết kế Dynamic Shield được giới thiệu</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 5</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>- Mitsubishi Motors Việt Nam mở văn phòng mới tại Hồ Chí Minh<br/>- Cột mốc doanh số 25.000 xe Xpander bán ra tại thị trường Việt Nam</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 7</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>- Mitsubishi Xpander Cross hoàn toàn mới được giới thiệu<br/>- Xuất xưởng chiếc xe Xpander đầu tiên được lắp ráp tại Việt Nam</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 10</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Pajero Sport mới được giới thiệu</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2021</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 8</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Giới thiệu dịch vụ hỗ trợ tài chính ô tô cho khách hàng mua xe Mitsubishi với tên gọi "MMV Auto Finance"</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 9</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Giới thiệu Mitsubishi Xpander phiên bản đặc biệt kỷ niệm 50.000 xe bán ra sau 3 năm</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 11</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Giới thiệu New Mitsubishi Triton Athlete</p>
            </div>
            <div className="history" style={{textAlign:"center"}}>
                <p style={{fontSize:"40px" ,fontWeight:"bold"}}>2022</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 1</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Mitsubishi Xpander được vinh danh là "Mẫu xe MPV của năm 2021"</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 3</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>MMV giới thiệu chương trình Xe qua sử dụng chính hãng UCar</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 6</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>Giới thiệu Mitsubishi Xpander phiên bản 2022</p>
                <p style={{fontSize:"20px" ,color:"GrayText"}}>tháng 10</p>
                <p style={{fontSize:"28px" ,color:"GrayText"}}>- Giới thiệu ứng dụng khách hàng Mitsubishi Connect+, tăng cường trải nghiệm khách hàng sau bán hàng<br/>- Lần đầu tiên, Việt Nam được chọn là nước ra mắt đầu tiên mẫu xe SUV cỡ nhỏ XFC Concept</p>
            </div>
        </Row>
    </Row>
    </>
    );
}

export default CompanyProfile