package Backend.ModelDTO;

import Backend.model.ServicePlan;
import jakarta.persistence.Column;
import lombok.Data;

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
    private String distributionCenter;
    private String date;
    private String time;
    private String status;
    private  Long serviceId;
    private  Long modelId;


    public ServicePlan mappedServicePlan(){
        Backend.model.ServicePlan servicePlan = new Backend.model.ServicePlan();
        servicePlan.setId(id);
        servicePlan.setFullName(fullName);
        servicePlan.setEmail(email);
        servicePlan.setNumberPhone(numberPhone);
        servicePlan.setLicensePlate(licensePlate);
        servicePlan.setDistributionCenter(distributionCenter);

        servicePlan.setDate(Date.valueOf(date));
        //SimpleDateFormat sdf = new SimpleDateFormat()
        LocalTime localTime = LocalTime.parse(time, DateTimeFormatter.ofPattern("HH:mm"));
        // Convert LocalTime to java.sql.Time
        Time sqlTime = Time.valueOf(localTime);
        servicePlan.setTime(sqlTime);
        servicePlan.setStatus(status);
        servicePlan.setServiceId(serviceId);
        servicePlan.setModelId(modelId);
        servicePlan.setStatus("watting");
        return servicePlan;
    }
}
