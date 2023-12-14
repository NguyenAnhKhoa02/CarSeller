package Backend.repository;

import Backend.model.NewspaperRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewspaperRegisterReposity extends JpaRepository<NewspaperRegister,Long> {
    @Query(
            value = "SELECT newspaper_register.email " +
                    "FROM newspaper_register",
            nativeQuery = true
    )
    public List<String> findAllEmail();
}
