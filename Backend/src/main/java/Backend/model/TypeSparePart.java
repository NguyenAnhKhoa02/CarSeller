package Backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TypeSparePart {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    private String nameTypeSparePart;
    @OneToMany(
            targetEntity = SparePart.class,
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "idTypeSparePart",
            referencedColumnName = "id"
    )
    private List<SparePart> spareParts;
}