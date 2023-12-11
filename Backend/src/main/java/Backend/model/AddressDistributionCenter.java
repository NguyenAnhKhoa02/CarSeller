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
public class AddressDistributionCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;
    private String isService;
    private String isSeller;
    private String isReplacementParts;
    private String isSecondHand;

    @OneToMany(
            targetEntity = ShowroomAndTesting.class,
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "fk_address",
            referencedColumnName = "id"
    )
    private List<ShowroomAndTesting> showroomAndTestings;
}