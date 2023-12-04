package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @Column(name = "versionId")
    private Long versionId;
    public Long getVersionId() {
        return versionId;
    }
    public void setVersionId(Long versionId) {
        this.versionId = versionId;
    }
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "versionId",
            nullable = false,
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Version versions;
}