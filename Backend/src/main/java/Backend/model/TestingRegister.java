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
    @Column(
            name = "testingRegisterId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String numberPhone;
    private String distributionCenter;
    private String carPD;
    private String status;
    @OneToOne
    @JoinColumn(
            name = "version_Id",
            referencedColumnName = "versionId"
    )
    private Version version;
}
