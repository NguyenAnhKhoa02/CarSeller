package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String color;
    private String imageName;
    public void setColor(String color) {
        this.color = color;
    }
    public String getColor() { return color; }
    public String getImageName() {
        return imageName;
    }
    public void setImageName(String imageName) {
        this.imageName = imageName;
    }
}