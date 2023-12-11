package Backend.repository;

import Backend.model.DistributionCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DistributionCenterReposity extends JpaRepository<DistributionCenter,Long> {
    @Modifying
    @Transactional
    @Query(
            value = "UPDATE distribution_center " +
                    "SET " +
                    "distribution_center.hotline= :#{#distributionCenter.getHotline()}, " +
                    "distribution_center.name_distribution_center= :#{#distributionCenter.getNameDistributionCenter()} " +
                    "WHERE distribution_center.id_distribution_center = :#{#distributionCenter.getId()}",
            nativeQuery = true
    )
    public void updateDistributionCenter(@Param("distributionCenter") DistributionCenter distributionCenter);
}
