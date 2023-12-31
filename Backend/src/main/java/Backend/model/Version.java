package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties("versionModels")
public class Version {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(
            cascade = CascadeType.ALL,
            targetEntity = Color.class
    )
    @JoinColumn(
            name = "fk_version_color",
            referencedColumnName = "id"
    )
    private List<Color> colors;
    @Column(name = "modelId",nullable = false)
    private Long modelId;
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "modelId",
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Model versionModels;

    @Column(nullable = false)
    private String nameVersion;
    @Column(
            columnDefinition = "TEXT"
    )
    private String info;
    private String gasCap;
    private String frontBrakes;
    private String rearBrakes;
    private String frontFogLight;
    private String doorHandle;
    private String wiperBlade;
    @Column(
            name = "wswandgl"
    )
    private String wrappedSteeringWheelAndGearLever;
    private String seatMaterial;
    private String airBag;
    private String backCamera;
    private String antiTheft;
    private String autoLock;
    @Column(nullable = false)
    private Long price;
}