package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DistributionCenter {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "id_distribution_center"
    )
    private Long id;
    private String hotline;
    private String nameDistributionCenter;

    @OneToMany(
            cascade = CascadeType.ALL,
            targetEntity = AddressDistributionCenter.class
    )
    @JoinColumn(
            name = "fk_distribution_int",
            referencedColumnName = "id_distribution_center"
    )
        private List<AddressDistributionCenter> addressDistributionCenters;
}
