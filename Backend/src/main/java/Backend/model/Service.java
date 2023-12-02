package Backend.model;

import jakarta.persistence.*;
import lombok.*;

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
    private Long serviceId;
    private String nameService;
    public String getNameService() { return nameService; }
    public void setNameService(String nameService) { this.nameService = nameService; }
}