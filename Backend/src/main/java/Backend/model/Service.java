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
            name = "id_service"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nameService;
}