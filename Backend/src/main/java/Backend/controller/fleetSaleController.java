package Backend.controller;

import Backend.ModelDTO.FleetSaleDTO;
import Backend.model.FleetSale;
import Backend.model.Model;
import Backend.model.ServicePlan;
import Backend.repository.FleetSaleReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@RequestMapping ("/fleetSales")
public class fleetSaleController {
    @Autowired
    FleetSaleReposity fleetSaleReposity;

    @GetMapping
    public ResponseEntity<Page<FleetSale>>  getAllModels(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<FleetSale> fleetSalePage = fleetSaleReposity.findAll(pageable);
        return (ResponseEntity<Page<FleetSale>>) ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("application/json"))
                .body(fleetSalePage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FleetSale> getOneModel(@PathVariable Long id) throws SQLException, IOException {
        FleetSale fleetSale = fleetSaleReposity.findById(id).orElse(null);
        return ResponseEntity
                .ok()
                .body(fleetSale);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FleetSale> updateServicePlan(@PathVariable Long id, @RequestBody ServicePlan updatedServicePlan) {
        FleetSale existingFleetSale = fleetSaleReposity.findById(id).orElse(null);

        if (existingFleetSale != null) {
            existingFleetSale.setStatus(updatedServicePlan.getStatus());
            fleetSaleReposity.save(existingFleetSale);
            return new ResponseEntity<>(existingFleetSale, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServicePlan(@PathVariable Long id) {
        fleetSaleReposity.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/save")
    public ResponseEntity<FleetSale> saveFleetSale(@RequestBody FleetSaleDTO fleetSaleDTO){
        FleetSale fleetSale = fleetSaleDTO.mappedFleetSale();
        fleetSaleReposity.save(fleetSale);

        return ResponseEntity.ok().body(fleetSale);
    }
}
