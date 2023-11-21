import {Row, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import banner from "../../../Components/Assets/banneroffers2.png"
import MUC1 from "../../../Components/Assets/MUC1.png"
import MUC2 from "../../../Components/Assets/MUC2.png"
import "./Offers.css"
function GenuineUsedCarProgram() {
    return (<>
    <Row><img src={banner} height="875"/></Row>
    <Row style={{maxWidth:"50%",margin:"0 auto", paddingBottom:"50px", paddingTop:"50px", textAlign:"justify"}}>
        <p>Với sự phát triển không ngừng của thị trường ô tô nói chung và thương hiệu Mitsubishi nói riêng, nhu cầu mua bán, trao đổi xe Mitsubishi đã qua sử dụng ngày càng tăng lên; Chất lượng sản phẩm, giá bán lại, địa điểm cung ứng dịch vụ uy tín là những quan tâm hàng đầu của người tiêu dùng. Để bắt kịp với nhu cầu đó của khách hàng, Mitsubishi Motors Việt Nam (MMV) chính thức ra mắt chương trình <b>Xe đã qua sử dụng chính hãng Mitsubishi</b> mang tên <b>“MMV UCAR “, gọi tắt là “MUC”,</b> triển khai thí điểm tại Nhà phân phối ủy quyền Savico Đà Nẵng từ ngày 21/3/2022.</p>
        <p>Khách hàng khi có nhu cầu mua bán xe qua sử dụng hoàn toàn có thể an tâm đến NPP được ủy quyền của MMV để được hỗ trợ đầy đủ các thủ tục mua bán minh bạch, rõ ràng cùng quy trình kiểm định chất lượng chính hãng. Xe sẽ được đội ngũ kỹ thuật viên chuyên nghiệp kiểm tra và đánh giá 160 hạng mục kỹ thuật theo tiêu chuẩn MMV và cấp giấy chứng nhận đạt tiêu chuẩn an toàn vận hành, đảm bảo chất lượng sử dụng cho quý khách hàng.</p>
        <img src={MUC1}/>
        <p style={{fontWeight:"bold"}}>Các dịch vụ xe đã qua sử dụng trong phạm vi chương trình MUC:</p>
        <ul>
            <li>Mua bán, ký gửi xe Mitsubishi đã qua sử dụng.</li>
            <li>Hỗ trợ thu mua xe Mitsubishi KH đang sử dụng để đổi lấy xe Mitsubishi mới.</li>
            <li>Hỗ trợ thu mua xe Mitsubishi KH đang sử dụng để đổi lấy xe Mitsubishi cũ chính hãng.</li>
        </ul>
        <img src={MUC2}/>
        <h4 style={{color:"red"}}>CHỨNG NHẬN TIÊU CHUẨN CHO XE MITSUBISHI ĐÃ QUA SỬ DỤNG CHÍNH HÃNG</h4>
        <p>Một chiếc xe Mitsubishi đã qua sử dụng khi đạt được đủ các điều kiện sau sẽ đạt tiêu chuẩn và được cấp chứng nhận đạt <b>Certified Pre-Owned (CPO) :</b></p>
        <ul>
            <li><b>Nguồn gốc:</b> chỉ áp dụng cho xe thương hiệu Mitsubishi được Mitsubishi Motors Việt Nam phân phối thông qua hệ thống NPP/đại lý ủy quyền.</li>
            <li><b>Niên hạn sử dụng:</b> xe tối đa không quá 5 năm sử dụng tính từ thời điểm xe có hiệu lực bảo hành xe mới cho đến thời điểm MMV xét cấp bảo hành CPO; hoặc không quá 140,000 km tính theo ODO (đồng hồ công tơ mét) trên taplo xe, tùy điều kiện nào đến trước (*).</li>
            <li><b>Tình trạng sử dụng:</b> không áp dụng cho xe :</li>
            <ul>
                <li>Xe có dấu hiệu sửa chữa, thay thế do va chạm nặng, đâm đụng; hoặc do thủy kích (phụ thuộc vào kết quả kiểm tra chất lượng, đánh giá, xác nhận của NPP ủy quyền).</li>
                <li>Xe có dấu hiệu hư hỏng do tháo lắp/nâng cấp/trang bị các bộ phận/phụ kiện không chính hãng và không đúng kỹ thuật làm ảnh hưởng đến các hệ thống vận hành, hoạt động của xe.</li>
                <li>Xe có dấu hiệu đã bị thay đổi, tác động hay điều chỉnh đồng hồ công-tơ-mét dẫn đến việc không xác định được số đo chính xác.</li>
            </ul>
            <li><b>Lịch sử bảo dưỡng:</b> áp dụng cho xe được bảo dưỡng chính hãng tối thiểu 1 lần/năm từ thời điểm xe có hiệu lực bảo hành xe mới cho đến thời điểm MMV xét cấp bảo hành CPO (phụ thuộc vào kết quả kiểm tra hệ thống dữ liệu lịch sử bảo dưỡng của MMV).</li>
            <li><b>Đạt kiểm tra chất lượng:</b> xe cần phải đạt bài kiểm tra chất lượng 160 điểm dành cho xe đã qua sử dụng do kỹ thuật viên đã qua đào tạo của NPP ủy quyền thực hiện.</li>
        </ul>
        <p style={{fontStyle:"italic"}}>(*) các trường hợp phát hiện xe có dấu hiệu đã bị thay đổi, tác động hay điều chỉnh đồng hồ công-tơ-mét thì MMV sẽ không chịu trách nhiệm cấp bảo hành CPO.</p>
        <div style={{paddingBottom:"100px", borderTopStyle:"solid", paddingTop:"25px"}}>
            <Row style={{color:"#5A646E"}}>
                <h5 style={{fontWeight:"bold"}}>BẠN MUỐN LÀM GÌ TIẾP THEO?</h5><br/>
                <p>Bạn có thể tìm kiếm thêm thông tin liên quan từ menu bên dưới</p>
            </Row>
            <Link to="/MuaXe/ChuongTrinhKhuyenMai"><Button variant="outline-dark" size="lg" className="MyBorder">KHUYẾN MÃI</Button></Link>
            <Link to="/SanPham/DangKyLaiThu"><Button variant="outline-dark" size="lg" className="MyBorder" style={{marginLeft:"25px"}}>ĐĂNG KÝ LÁI THỬ</Button></Link>
        </div>
    </Row>
    </>
    );
}

export default GenuineUsedCarProgram