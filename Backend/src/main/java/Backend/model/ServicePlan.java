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
    private String status;
    @Column(name = "serviceId")
    private Long serviceId;
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "serviceId",
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Service services;
    @Column(name = "modelId")
    private Long modelId;
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "modelId",
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Model servicePlanModels;
}