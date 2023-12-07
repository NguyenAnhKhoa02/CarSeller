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
<<<<<<< HEAD
=======
    @Column( name= "versionId",nullable = false )
    private Long versionId;
    public Long getVersionId() { return versionId; }
    public void setVersionId(Long versionId) { this.versionId = versionId; }
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "versionId",
            nullable = false,
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Version versions;
>>>>>>> ee9452c7f5877694ee185e63aa8a35d45c4eca27
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