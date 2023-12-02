package Backend.model;

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
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    @OneToOne
    @JoinColumn(
            name = "service_id",
            referencedColumnName = "serviceId"
    )
    private Service service;
    @OneToOne
    @JoinColumn(
            name = "model_id",
            referencedColumnName = "modelId"
    )
    private Model model;
}