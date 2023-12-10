package Backend.repository;

import Backend.model.DistributionCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistributionCenterReposity extends JpaRepository<DistributionCenter,Long> {

}
