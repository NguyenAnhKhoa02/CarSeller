package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
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
    @Column(name = "versionId",nullable = false)
    private Long versionId;
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "versionId",
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Version versions;
}