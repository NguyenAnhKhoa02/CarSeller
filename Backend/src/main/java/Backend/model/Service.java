package Backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Service {
    @Id
    @Column(
            name = "serviceId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "services"
    )
    private List<ServicePlan> servicePlans;
    private String nameService;
    public String getNameService() { return nameService; }
    public void setNameService(String nameService) { this.nameService = nameService; }
}