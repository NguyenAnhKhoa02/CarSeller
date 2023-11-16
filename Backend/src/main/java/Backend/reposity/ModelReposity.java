package Backend.reposity;

import Backend.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelReposity extends JpaRepository<Model,Long> {

    @Query(
            value = "SELECT COUNT(*) = 1 " +
                    "FROM model " +
                    "WHERE model.name_model = :nameModel",
            nativeQuery = true
    )
    int checkNameModel(@Param("nameModel") String nameModel);
}
