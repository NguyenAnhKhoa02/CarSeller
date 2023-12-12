package Backend.ModelDTO;

import Backend.model.AddressDistributionCenter;
import Backend.model.DistributionCenter;
import Backend.model.ServicePlan;
import Backend.services.TimeService;
import jakarta.persistence.Column;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Data
public class ServicePlanDTO {
    private Long id;
    private String fullName;
    private  String email;
    private  String numberPhone;
    private  String licensePlate;
    private String date;
    private String time;
    private String status;
    private  Long serviceId;
    private  Long modelId;
    private String distribution;

    @Autowired
    TimeService timeService;

    public ServicePlan mappedServicePlan(){
        Backend.model.ServicePlan servicePlan = new Backend.model.ServicePlan();
        timeService = new TimeService();

        servicePlan.setId(id);
        servicePlan.setFullName(fullName);
        servicePlan.setEmail(email);
        servicePlan.setNumberPhone(numberPhone);
        servicePlan.setLicensePlate(licensePlate);
        servicePlan.setDate(Date.valueOf(date));
        servicePlan.setTime(timeService.TimeToTimestamp(time));
        servicePlan.setStatus(status);
        servicePlan.setAddressDistributionCenter(distribution);
        servicePlan.setStatus("watting");
        return servicePlan;
    }
}