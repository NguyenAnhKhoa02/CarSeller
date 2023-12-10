package Backend.controller;

import Backend.model.DistributionCenter;
import Backend.model.Model;
import Backend.repository.DistributionCenterReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/distributionCenters")
public class distributionCenterController {
    @Autowired
    private DistributionCenterReposity distributionCenterReposity;

    @GetMapping
    public ResponseEntity<Page<DistributionCenter>> getAllDistributions(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<DistributionCenter> distributionCenterPage = distributionCenterReposity.findAll(pageable);

        return (ResponseEntity<Page<DistributionCenter>>) ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("application/json"))
                .body(distributionCenterPage);
    }

    @GetMapping("/all")
    public List<DistributionCenter> getAlls(){
        return distributionCenterReposity.findAll();
    }
}