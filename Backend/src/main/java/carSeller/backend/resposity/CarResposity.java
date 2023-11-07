package carSeller.backend.resposity;

import carSeller.backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarResposity extends JpaRepository<Car,Integer> {
}
