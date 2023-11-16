package Backend.reposity;

import Backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarReposity extends JpaRepository<Car, Long> {
}
