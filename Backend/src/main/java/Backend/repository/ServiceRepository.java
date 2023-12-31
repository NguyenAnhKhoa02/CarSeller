package Backend.repository;

import Backend.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Long> {
    @Query(
            value = "SELECT COUNT(*) = 1 " +
                    "FROM service " +
                    "WHERE service.name_service = :nameService",
            nativeQuery = true
    )
    int checkNameModel(@Param("nameService") String nameService);

    @Query(
            value = "SELECT service.name_service " +
                    "FROM service " +
                    "WHERE service.id_service = :idService",
            nativeQuery = true
    )
    String findNameService(@Param("idService") Long idService);
}
