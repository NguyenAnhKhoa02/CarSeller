package Backend.repository;

import Backend.model.FleetSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FleetSaleReposity extends JpaRepository<FleetSale,Long> {

}
