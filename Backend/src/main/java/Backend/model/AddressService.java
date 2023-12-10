package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddressService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(
            cascade = CascadeType.ALL,
            targetEntity = AddressDistributionCenter.class
    )
    @JoinColumn(
            name = "fk_address",
            referencedColumnName = "id"
    )
    private AddressDistributionCenter addressDistributionCenter;

    @OneToOne(
            cascade = CascadeType.ALL,
            targetEntity = Service.class
    )
    @JoinColumn(
            name = "fk_service",
            referencedColumnName = "id_service"
    )
    private Service service;
}
