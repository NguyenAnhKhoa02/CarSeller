package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
}

