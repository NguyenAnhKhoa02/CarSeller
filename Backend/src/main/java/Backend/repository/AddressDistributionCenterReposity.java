package Backend.repository;

import Backend.model.AddressDistributionCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface AddressDistributionCenterReposity extends JpaRepository<AddressDistributionCenter,Long> {

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE address_distribution_center " +
                    "SET " +
                    "address_distribution_center.address=:#{#addressDistributionCenter.getAddress()}, " +
                    "address_distribution_center.is_replacement_parts=:#{#addressDistributionCenter.getIsReplacementParts()}, " +
                    "address_distribution_center.is_second_hand=:#{#addressDistributionCenter.getIsSecondHand()}, " +
                    "address_distribution_center.is_seller=:#{#addressDistributionCenter.getIsSeller()}, " +
                    "address_distribution_center.is_service=:#{#addressDistributionCenter.getIsService()} " +
                    "WHERE address_distribution_center.id = :#{#addressDistributionCenter.getId()}",
            nativeQuery = true
    )
    public void updateAddressDistributionCenter(@Param("addressDistributionCenter") AddressDistributionCenter addressDistributionCenter);

    @Modifying
    @Transactional
    @Query(
            value = "INSERT INTO `address_distribution_center`(`id`, `address`, `is_replacement_parts`, `is_second_hand`, `is_seller`, `is_service`, `fk_distribution_int`) " +
                    "VALUES (:#{#addressDistributionCenter.getId()},:#{#addressDistributionCenter.getAddress()},:#{#addressDistributionCenter.getIsReplacementParts()},:#{#addressDistributionCenter.getIsSecondHand()},:#{#addressDistributionCenter.getIsSeller()},:#{#addressDistributionCenter.getIsService()},:idDistribution)",
            nativeQuery = true
    )
    public void saveNewAddress(@Param("addressDistributionCenter") AddressDistributionCenter addressDistributionCenter,@Param("idDistribution") Long idDistribution);

    @Modifying
    @Transactional
    @Query(
            value = "SELECT address_distribution_center.id " +
                    "FROM address_distribution_center " +
                    "WHERE address_distribution_center.fk_distribution_int = :idDistribution",
            nativeQuery = true
    )
    public List<Long> findAllIdFromDistribution(@Param("idDistribution") Long idDistribution);

    @Query(
            value = "SELECT address_distribution_center.id FROM address_distribution_center \n" +
                    "ORDER BY address_distribution_center.id DESC LIMIT 1",
            nativeQuery = true
    )
    public Long findLastId();
}
