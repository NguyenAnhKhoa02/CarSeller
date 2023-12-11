package Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import Backend.model.ShowroomAndTesting;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ShowroomAndTestingResposity extends JpaRepository<ShowroomAndTesting,Long> {

    @Modifying
    @Transactional
    @Query(
            value = "DELETE FROM showroom_and_testing " +
                    "WHERE showroom_and_testing.fk_address = :idAddress",
            nativeQuery = true
    )
    public void deleteAllFromAddress(@Param("idAddress") Long idAddress);
}
