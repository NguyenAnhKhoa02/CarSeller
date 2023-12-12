package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TestingRegister {
    @Id
    @Column(
            name = "testingRegisterId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String numberPhone;
    private String carPD;
    private String status;
    @Column(
            name = "versionId",
            insertable = false,
            updatable = false,
            nullable = false
    )
    private Long versionId;

    @ManyToOne(
            cascade = CascadeType.ALL,
            targetEntity = Version.class
    )
    @JoinColumn(
            name = "versionId",
            referencedColumnName = "id"
    )
    private Version version;

    @ManyToOne(
            cascade = CascadeType.ALL,
            targetEntity = DistributionCenter.class
    )
    @JoinColumn(
            name = "fk_distribution",
            referencedColumnName = "id_distribution_center"
    )
    private DistributionCenter distributionCenter;

    @Column(
            name = "fk_distribution",
            insertable = false,
            updatable = false,
            nullable = false
    )
    private Long distributionId;


}