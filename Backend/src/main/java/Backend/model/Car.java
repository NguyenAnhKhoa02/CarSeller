package Backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Transactional
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "id"
    )
    private Long carId;

    private int numCarSeat;
    private String info;
    private String gasCap;
    private String frontBrakes;
    private String rearBrakes;
    private String frontFogLight;
    private String doorHandle;
    private String wiperBlade;

    @Column(
            name = "wSWandGL"
    )
    private String wrappedSteeringWheelAndGearLever;
    private String seatMaterial;
    private String airBag;
    private String backCamera;
    private String antiTheft;
    private String autoLock;
    private int price;

    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name = "car_id",
            referencedColumnName = "id"
    )
    private List<Color> colors;
}
