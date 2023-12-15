import { Card, CardContent, CardHeader,Typography } from "@mui/material";

export const Dashboard = () => (
    <Card>
        <CardHeader title="Chào mừng đến trang quản lý Mitsubishi" />
        <CardContent>
            <Typography variant="h6" gutterBottom>
                Quản lý Người Dùng Cho Trang Admin
            </Typography>
            <Typography paragraph>
                Ở đây ta có thể thực hiện các hoạt động quản lý người dùng cho trang admin như thêm, sửa, xóa người dùng, cũng như quản lý quyền hạn.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Lịch Đăng Ký Lái Thử
            </Typography>
            <Typography paragraph>
                Xem và quản lý lịch đăng ký lái thử. Ta có thể xem, sửa đổi và hủy các lịch đăng ký lái thử.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Đặt Lịch Dịch Vụ
            </Typography>
            <Typography paragraph>
                Xem và quản lý lịch đặt dịch vụ cho xe. Ta có thể xem, sửa đổi và hủy các lịch đặt dịch vụ từ khách hàng.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Bán Hàng Dự Án
            </Typography>
            <Typography paragraph>
                Xem và quản lý thông tin về bán hàng dự án, bao gồm các giao dịch và chi tiết đặt hàng từ các nhà phân phối.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Tin Tức
            </Typography>
            <Typography paragraph>
                Quản lý và cập nhật tin tức mới nhất về Mitsubishi, bao gồm cả tin tức sản phẩm, sự kiện và các thông báo quan trọng khác.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Khuyến Mãi
            </Typography>
            <Typography paragraph>
                Xem và quản lý các chương trình khuyến mãi và ưu đãi đặc biệt đang diễn ra. Ta có thể thêm mới, sửa đổi hoặc xóa các chương trình khuyến mãi.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Mẫu Xe
            </Typography>
            <Typography paragraph>
                Quản lý danh sách các mẫu xe Mitsubishi hiện có, bao gồm cả thông tin chi tiết, hình ảnh và các tính năng nổi bật của từng mẫu.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Phiên Bản Xe
            </Typography>
            <Typography paragraph>
                Xem và quản lý các phiên bản của mỗi mẫu xe, bao gồm thông số kỹ thuật, giá bán, các tùy chọn trang bị và màu.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Dịch Vụ
            </Typography>
            <Typography paragraph>
                Quản lý thông tin về các loại dịch vụ dành cho xe Mitsubishi của khách hàng.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Phụ Tùng
            </Typography>
            <Typography paragraph>
                Xem và quản lý thông tin về các phụ tùng của Mitsubishi. Ta có thể thêm mới, sửa đổi hoặc xóa các mục phụ tùng từ danh sách.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Email Đăng Ký Nhận Thông Tin
            </Typography>
            <Typography paragraph>
                Quản lý email đăng ký nhận thông tin. Ta có thể xem danh sách email đã đăng ký và cung cấp thông tin mới nhất về sản phẩm, dịch vụ, và khuyến mãi. Hay hủy đăng ký nhận thông tin của email.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Nhà Phân Phối
            </Typography>
            <Typography paragraph>
                Xem và quản lý thông tin về các nhà phân phối của Mitsubishi, bao gồm cả địa chỉ và thông tin liên hệ.
            </Typography>
        </CardContent>
    </Card>
);
