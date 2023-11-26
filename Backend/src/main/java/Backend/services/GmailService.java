package Backend.services;
import Backend.model.ServicePlan;
import Backend.model.TestingRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class GmailService{
    @Autowired
    private JavaMailSender javaMailSender;
    public  void sendingGmailServicePlan(ServicePlan servicePlan) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gr5carseller@gmail.com");
        message.setTo(servicePlan.getEmail());
        message.setSubject("Thông báo đặt lịch dịch vụ");
        message.setText("Kinh gửi quý khách: " + servicePlan.getFullName() + "\n" +
                        "Quý khách đã đăng ký sử dụng dịch vụ cho xe có biển số: " + servicePlan.getLicensePlate() + " " +
                        "tại trung tâm " + servicePlan.getDistributionCenter() + "\n" +
                        "Nhân viên sẽ sớm liên lạc để tư vấn quý khách!" + "\n" +
                        "Cảm ơn quý khách đã tin tưởng sử dụng dịch vụ và hãng xe của chúng tôi!");

        javaMailSender.send(message);
    }

    public  void sendingGmailTestingRegister(TestingRegister testingRegister) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gr5carseller@gmail.com");
        message.setTo(testingRegister.getEmail());
        message.setSubject("Thông báo đặt lịch đăng ký lái thử");
        message.setText("Kinh gửi quý khách: " + testingRegister.getFullName() + "\n" +
//                "Quý khách đã đăng ký lái thử xe: " +testingRegister.getCar().get+ " " +
                "tại trung tâm " + testingRegister.getDistributionCenter() + "\n" +
                "Nhân viên sẽ sớm liên lạc để tư vấn quý khách!" + "\n" +
                "Cảm ơn quý khách đã tin tưởng sử dụng dịch vụ và hãng xe của chúng tôi!");

        javaMailSender.send(message);
    }
}
