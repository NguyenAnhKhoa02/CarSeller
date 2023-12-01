package Backend.repository;

import Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query(
            value = "SELECT * " +
                    "FROM user " +
                    "WHERE user.username = :username",
            nativeQuery = true
    )
    Optional<User> findByUsername(@Param("username") String username);
}
