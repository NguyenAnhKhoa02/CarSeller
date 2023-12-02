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
    public String getUsername() { return username; }
    public String getPassword() { return password; }
    private String username;
    private String password;
}