import {Table, Button} from "react-bootstrap";

function Cars () {
    return (<>
        <h1 style={{textAlign:"center"}}>Cars</h1>
        <div style={{textAlign:"end"}}>
            <Button>
                Mẫu xe mới
            </Button>
        </div>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>#</th>
            <th>Mẫu Xe</th>
            <th>Phiên Bản Xe</th>
            <th>Số Chỗ Ngồi</th>
            <th>Dung Tích Nhiên Liệu</th>
            <th>Hộp Số</th>
            <th>Túi Khí An Toàn</th>
            <th>Camera Lùi</th>
            <th>Chìa Khoá Mã Hoá Chống Trộm</th>
            <th>Khoá Cửa Từ Xa</th>
            <th>Giá</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            </tbody>
    </Table>
    </>
    );
}

export default Cars