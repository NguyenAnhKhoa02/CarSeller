package Backend.model;

import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Newspaper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(
            columnDefinition = "TEXT"
    )
    private String content;
    private String imageName;
}