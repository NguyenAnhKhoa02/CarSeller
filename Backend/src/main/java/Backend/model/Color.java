package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class Color {
    @Id
    @Column(
            name = "colorId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String color;
    private String url;
}
