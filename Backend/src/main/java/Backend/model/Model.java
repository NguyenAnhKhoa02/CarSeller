package Backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Model {
    @Id
    @Column(
            name = "modelId"
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    private String nameModel;
    private String info;
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
    public void setNameModel(String name) {
        this.nameModel = name;
    }
}