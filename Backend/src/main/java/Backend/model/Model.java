package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;

import java.sql.Blob;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Model {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    private String nameModel;
    private String imageName;
    private String info;
    private String fuel;
    private int numCarSeat;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "versionModels"
    )
    private List<Version> versions;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "servicePlanModels"
    )
    private List<ServicePlan> servicePlans;
    public Long getId() { return id; }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNameModel() { return nameModel; }
    public String getUrl() {return imageName;}
    public void setNameModel(String name) {
        this.nameModel = name;
    }
}