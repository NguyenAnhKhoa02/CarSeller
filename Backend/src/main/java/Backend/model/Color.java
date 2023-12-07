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
    private String color;
    private String url;
    public void setColor(String color) {
        this.color = color;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getColor() { return color; }
    public String getUrl() { return url; }
}