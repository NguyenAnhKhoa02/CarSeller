package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ServicePlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
            name = "servicePlanId"
    )
    private Long id;
    private String fullName;
    private  String email;
    private  String numberPhone;
    private  String licensePlate;
    private String distributionCenter;
    private Date date;
    private Time time;
    private String status;

    @OneToOne
    @JoinColumn(
        name = "service_id",
            referencedColumnName = "serviceId"
    )
    private  Service service;

    @OneToOne
    @JoinColumn(
            name = "model_id",
            referencedColumnName = "modelId"
    )
    private Model model;
}
