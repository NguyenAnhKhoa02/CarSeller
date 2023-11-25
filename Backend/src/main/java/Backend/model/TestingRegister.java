package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TestingRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
            name = "TestingRegister_Id"
    )
    private Long id;
    private String fullName;
    private String email;
    private String numberPhone;
    private String distributionCenter;
    private String carPD;
    private String status;
    @OneToOne
    @JoinColumn(
            name = "car_Id",
            referencedColumnName = "id"
    )
    private Car car;
}
