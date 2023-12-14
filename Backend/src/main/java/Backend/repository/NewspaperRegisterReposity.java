package Backend.repository;

import Backend.model.NewspaperRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewspaperRegisterReposity extends JpaRepository<NewspaperRegister,Long> {
}
