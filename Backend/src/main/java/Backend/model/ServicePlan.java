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
    private Date date;
    private Time time;
    private String status;
    @OneToOne(
            cascade = CascadeType.ALL,
            targetEntity = Service.class
    )
    @JoinColumn(
            name = "service_id",
            referencedColumnName = "id_service",
            insertable = false,
            updatable = false
    )
    private Service service;

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

    @OneToOne(
            cascade = CascadeType.ALL,
            targetEntity = AddressDistributionCenter.class
    )
    @JoinColumn(
            name = "address_id",
            referencedColumnName = "id"
    )
    private AddressDistributionCenter addressDistributionCenter;
}