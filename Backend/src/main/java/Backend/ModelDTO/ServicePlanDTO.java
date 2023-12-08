package Backend.ModelDTO;

import Backend.model.ServicePlan;
import jakarta.persistence.Column;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;
@Data
public class ServicePlanDTO {
    private Long id;
    private String fullName;
    private  String email;
    private  String numberPhone;
    private  String licensePlate;
    private String distributionCenter;
    private Date date;
    private Time time;
    private String status;
    private  Long serviceId;
    private  Long modelId;

    public ServicePlan mappedServicePlan(){
        Backend.model.ServicePlan servicePlan = new ServicePlan();
        servicePlan.setId(id);
        servicePlan.setFullName(fullName);
        servicePlan.setEmail(email);
        servicePlan.setNumberPhone(numberPhone);
        servicePlan.setLicensePlate(licensePlate);
        servicePlan.setDistributionCenter(distributionCenter);
        servicePlan.setDate(date);
        servicePlan.setTime(time);
        servicePlan.setStatus(status);
        servicePlan.setServiceId(serviceId);
        servicePlan.setModelId(modelId);
        return servicePlan;
    }
}
