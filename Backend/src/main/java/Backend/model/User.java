package Backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class User {
    @Id
    @Column(
            name = "userId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Getter
    private String username;
    @Getter
    private String password;
}