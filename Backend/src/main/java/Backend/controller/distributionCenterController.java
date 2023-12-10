package Backend.controller;

import Backend.ModelDTO.DistributionCenterDTO;
import Backend.ModelDTO.ModelDTO;
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
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/distributionCenters")
public class distributionCenterController {
    @Autowired
    private DistributionCenterReposity distributionCenterReposity;

    @PostMapping
    public @ResponseBody ResponseEntity<DistributionCenter> saveDistributionCenter(@ModelAttribute DistributionCenterDTO distributionCenterDTO){
        DistributionCenter distributionCenter = distributionCenterDTO.mappedDisributionCenter();
        distributionCenterReposity.save(distributionCenter);
        return new ResponseEntity<>(distributionCenter,HttpStatus.CREATED);
    }

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

    @GetMapping("/{id}")
    public ResponseEntity<DistributionCenter> getOneDistributionCenter(@PathVariable Long id){
        DistributionCenter distributionCenter = distributionCenterReposity.findById(id).orElse(null);
        System.out.println(distributionCenter);
        return ResponseEntity
                .ok()
                .body(distributionCenter);
    }

    @PutMapping
    public ResponseEntity<DistributionCenter> updateDistributionCenter(@ModelAttribute DistributionCenterDTO distributionCenterDTO){
        return new ResponseEntity<>(null,HttpStatus.OK);
    }


    @GetMapping("/all")
    public List<DistributionCenter> getAlls(){
        return distributionCenterReposity.findAll();
    }
}
