package Backend.repository;

import Backend.model.TestingRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestingRegisterRepository extends JpaRepository<TestingRegister,Long> {

     TestingRegister getTestingRegisterByFullNameAndEmail(String fullName, String email);
}
