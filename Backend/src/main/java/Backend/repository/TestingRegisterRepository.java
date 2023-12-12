package Backend.repository;

import Backend.model.TestingRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TestingRegisterRepository extends JpaRepository<TestingRegister,Long> {

     TestingRegister getTestingRegisterByFullNameAndEmail(String fullName, String email);

     @Modifying
     @Transactional
     @Query(
             value = "INSERT INTO " +
                     "`testing_register`(`testing_register_id`,`carpd`, `email`, `full_name`, `number_phone`, `status`, `fk_distribution`, `version_id`) " +
                     "VALUES (:#{#testingRegister.getId()},:#{#testingRegister.getCarPD()},:#{#testingRegister.getEmail()},:#{#testingRegister.getFullName()},:#{#testingRegister.getNumberPhone()},:#{#testingRegister.getStatus()},:idDistribution,:idVersion)",
             nativeQuery = true
     )
     void saveTestingRegister(@Param("testingRegister") TestingRegister testingRegister,@Param("idVersion") Long idVersion, @Param("idDistribution") Long idDistribution);

     @Query(
             value = "SELECT testing_register.testing_register_id " +
                     "FROM testing_register " +
                     "ORDER BY testing_register.testing_register_id DESC LIMIT 1",
             nativeQuery = true
     )
     Long getLastId();
}
