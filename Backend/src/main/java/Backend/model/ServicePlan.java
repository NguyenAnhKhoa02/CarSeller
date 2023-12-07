package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.sql.Time;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ServicePlan {
    @Id
    @Column(
            name = "servicePlanId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private  String email;
    private  String numberPhone;
    private  String licensePlate;
    private String distributionCenter;
    private Date date;
    private Time time;
    @Column(nullable = false)
    private String status;
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    @Column(name = "serviceId",nullable = false)
    private Long serviceId;
    public Long getServiceId() { return serviceId; }
    public void setServiceId(Long serviceId) { this.serviceId = serviceId; }
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "serviceId",
            nullable = false,
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Service services;
    @Column(name = "modelId",nullable = false)
    private Long modelId;
    public Long getModelId() {
        return modelId;
    }
    public void setModelId(Long modelId) {
        this.modelId = modelId;
    }
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "modelId",
            nullable = false,
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Model servicePlanModels;
}