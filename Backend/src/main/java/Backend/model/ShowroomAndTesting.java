package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShowroomAndTesting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(
        cascade = CascadeType.ALL,
            targetEntity = DistributionCenter.class
    )
    @JoinColumn(
            name = "fk_address",
            referencedColumnName = "id_distribution_center"
    )
    private DistributionCenter distributionCenter;
    private Date date;
    private String timeWorking;
}
