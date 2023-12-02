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
    private String fullName;
    private String email;
    private String numberPhone;
    private String distributionCenter;
    private String carPD;
    private String status;
    public String getStatus() { return status; }
    public void setStatus(String status) {
        this.status = status;
    }
    @OneToOne
    @JoinColumn(
            name = "version_id",
            referencedColumnName = "versionId"
    )
    private Version version;
}