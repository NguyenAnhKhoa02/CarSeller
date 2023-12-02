package Backend.model;

import jakarta.persistence.*;
import lombok.*;
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

    public void setColor(String color) {
        this.color = color;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    @Getter
    private String color;
    @Getter
    private String url;
}
