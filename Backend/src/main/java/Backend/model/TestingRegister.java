package Backend.model;

import jakarta.persistence.*;
import lombok.*;

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

    public void setStatus(String status) {
        this.status = status;
    }

    private String fullName;
    private String email;
    private String numberPhone;
    private String distributionCenter;
    private String carPD;
    @Getter
    private String status;
    @OneToOne
    @JoinColumn(
            name = "version_Id",
            referencedColumnName = "versionId"
    )
    private Version version;
}
