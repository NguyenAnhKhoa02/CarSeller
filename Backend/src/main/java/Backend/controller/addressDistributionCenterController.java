package Backend.controller;

import Backend.model.AddressDistributionCenter;
import Backend.repository.AddressDistributionCenterReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/addressDistributionCenters")
public class addressDistributionCenterController {

    @Autowired
    private AddressDistributionCenterReposity addressDistributionCenterReposity;


    @GetMapping
    public ResponseEntity<Page<AddressDistributionCenter>> getAllAddressDistributionCenters(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        System.out.println(addressDistributionCenterReposity.findAll());
        Page<AddressDistributionCenter> addressDistributionCenterPage = addressDistributionCenterReposity.findAll(pageable);

        return (ResponseEntity<Page<AddressDistributionCenter>>) ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("application/json"))
                .body(addressDistributionCenterPage);
    }

    @GetMapping("/all")
    public List<AddressDistributionCenter> getAll(){
        return addressDistributionCenterReposity.findAll();
    }
}
