package Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Backend.model.ShowroomAndTesting;

@Repository
public interface ShowroomAndTestingResposity extends JpaRepository<ShowroomAndTesting,Long> {
}
