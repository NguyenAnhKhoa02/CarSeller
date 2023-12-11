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

    @Modifying
    @Transactional
    @Query(
            value = "INSERT INTO `showroom_and_testing`(`begin`, `date`, `end`, `fk_address`) " +
                    "VALUES (:#{#showroomAndTesting.getBegin()},:#{#showroomAndTesting.getDate()},:#{#showroomAndTesting.getEnd()},:idAddress)",
            nativeQuery = true
    )
    public void saveAddress(@Param("showroomAndTesting") ShowroomAndTesting showroomAndTesting, @Param("idAddress") Long idAddress);

    @Query(
            value = "SELECT address_distribution_center.address " +
                    "FROM `showroom_and_testing`,address_distribution_center " +
                    "WHERE showroom_and_testing.fk_address = address_distribution_center.id and showroom_and_testing.id = :id",
            nativeQuery = true
    )
    public String findNameAddressById(@Param("id") Long id);

    @Query(
            value = "SELECT distribution_center.name_distribution_center\n" +
                    "FROM `showroom_and_testing`,address_distribution_center,distribution_center\n" +
                    "WHERE showroom_and_testing.id = :id and address_distribution_center.id = showroom_and_testing.fk_address and address_distribution_center.fk_distribution_int = distribution_center.id_distribution_center\n" +
                    "LIMIT 1",
            nativeQuery = true
    )
    public String findNameDistributionById(@Param("id") Long id);

    @Query(
            value = "SELECT distribution_center.hotline " +
                    "FROM `showroom_and_testing`,address_distribution_center,distribution_center " +
                    "WHERE showroom_and_testing.id = :id and address_distribution_center.id = showroom_and_testing.fk_address and address_distribution_center.fk_distribution_int = distribution_center.id_distribution_center " +
                    "LIMIT 1",
            nativeQuery = true
    )
    public String findHotlineDistributinoById(@Param("id") Long id);
}
