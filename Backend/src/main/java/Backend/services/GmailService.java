package Backend.services;
import Backend.model.FleetSale;
import Backend.model.Newspaper;
import Backend.model.ServicePlan;
import Backend.model.TestingRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class GmailService{

    @Autowired
    private Environment environment;

    @Autowired
    private JavaMailSender javaMailSender;
    public  void sendingGmailServicePlan(ServicePlan servicePlan, String nameModel, String nameService) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gr5carseller@gmail.com");
        message.setTo(servicePlan.getEmail());
        message.setSubject("Thông báo đặt lịch dịch vụ");
        message.setText("Kinh gửi quý khách: " + servicePlan.getFullName() + "\n" +
                        "Quý khách đã đăng ký sử dụng dịch vụ cho xe có biển số: " + servicePlan.getLicensePlate() + "\n" +
                        "Mẫu xe đã đăng ký: " + nameModel + "\n" +
                        "Dịch vụ quý khách yêu cầu: "+ nameService + "\n" +
                        "Tại địa chỉ " + servicePlan.getAddressDistributionCenter() + "\n" +
                        "Ngày sử dụng dịch vụ: " + servicePlan.getDate().toString() + "\n" +
                        "Thời gian: " + servicePlan.getTime() + "\n" +
                        "Nhân viên sẽ sớm liên lạc để tư vấn quý khách!" + "\n" +
                        "Cảm ơn quý khách đã tin tưởng sử dụng dịch vụ và hãng xe của chúng tôi!");

        javaMailSender.send(message);
    }

    public  void sendingGmailTestingRegister(TestingRegister testingRegister, String nameVersion, String nameDistributionCenter) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gr5carseller@gmail.com");
        message.setTo(testingRegister.getEmail());
        message.setSubject("Thông báo đặt lịch đăng ký lái thử");
        message.setText("Kinh gửi quý khách: " + testingRegister.getFullName() + "\n" +
                "Quý khách đã đăng ký lái thử xe phiên bản: " + nameVersion + " " +
                "tại trung tâm " + nameDistributionCenter + "\n" +
                "Nhân viên sẽ sớm liên lạc để tư vấn quý khách!" + "\n" +
                "Cảm ơn quý khách đã tin tưởng sử dụng dịch vụ và hãng xe của chúng tôi!");
        javaMailSender.send(message);
    }

    public void sendingGmailFleetSale(FleetSale fleetSale, String modelName){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gr5carseller@gmail.com");
        message.setTo(fleetSale.getEmail());
        message.setSubject("Thông báo bán hàng dự án");
        message.setText("Kinh gửi quý khách: " + fleetSale.getFullName() + "\n" +
                "Cảm ơn quý công ty đã tin tưởng chọn hãng xe của chúng tôi! \n" +
                "Chúng tôi hiện đã ghi nhận thông tin như sau: \n"+
                "Tên giao dịch: " + fleetSale.getContactName() + "\n" +
                "Địa chỉ công ty: " + fleetSale.getCompanyAddress() + "\n" +
                "Số điện thoại công ty: " + fleetSale.getCompanyPhone() + "\n" +
                "Mẫu xe đặt: " + modelName + "\n" +
                "Số lượng: " + fleetSale.getQuantity() + "\n" +
                "\nChúng tôi sẽ sớm liên lạc với quý công ty để đưa ra bản hợp đồng cho cả đôi bên.\n" +
                "Một lần nữa, cảm ơn quý công ty đã chọn hợp tác cùng chúng tôi!");
        javaMailSender.send(message);
    }

    public void sendingGmailForNewspaper(String email){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gr5carseller@gmail.com");
        message.setTo(email);
        message.setSubject("Thông báo tin tức mới");
        message.setText("Bạn có tin tức mới từ chúng tôi hãy truy cập ngay trang http://localhost:3000/VeChungToi/TinTuc để cập nhật tin tức mới nhất");
        javaMailSender.send(message);
    }
}
