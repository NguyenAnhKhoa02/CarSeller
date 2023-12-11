package Backend.controller;

import Backend.ModelDTO.DistributionCenterDTO;
import Backend.ModelDTO.ModelDTO;
import Backend.model.AddressDistributionCenter;
import Backend.model.DistributionCenter;
import Backend.model.Model;
import Backend.model.ShowroomAndTesting;
import Backend.repository.AddressDistributionCenterReposity;
import Backend.repository.DistributionCenterReposity;
import Backend.repository.ShowroomAndTestingResposity;
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

    @Autowired
    private ShowroomAndTestingResposity showroomAndTestingResposity;

    @Autowired
    private AddressDistributionCenterReposity addressDistributionCenterReposity;

    @PostMapping
    public @ResponseBody ResponseEntity<DistributionCenter> saveDistributionCenter(@ModelAttribute DistributionCenterDTO distributionCenterDTO){
        DistributionCenter distributionCenter = distributionCenterDTO.mappedDisributionCenterForCreate();
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

        return ResponseEntity
                .ok()
                .body(distributionCenter);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DistributionCenter> updateDistributionCenter(@ModelAttribute DistributionCenterDTO distributionCenterDTO){
        DistributionCenter distributionCenter = distributionCenterDTO.mappedDistributionCenterForEdit();

        if(!distributionCenterDTO.getExistedAddresses().isEmpty()){
            List<Long> idList = addressDistributionCenterReposity.findAllIdFromDistribution(distributionCenter.getId());

            for (AddressDistributionCenter addressDistributionCenter:
                 distributionCenterDTO.getExistedAddresses()) {

                idList.remove(addressDistributionCenter.getId());
                addressDistributionCenterReposity.updateAddressDistributionCenter(addressDistributionCenter);
            }

            if(!idList.isEmpty()){
                for (Long idAddress:
                    idList) {
                    showroomAndTestingResposity.deleteAllFromAddress(idAddress);
                }
                addressDistributionCenterReposity.deleteAllById(idList);
            }

        }else{
            List<Long> idList = addressDistributionCenterReposity.findAllIdFromDistribution(distributionCenter.getId());
            for (Long idAddress:
                    idList) {
                showroomAndTestingResposity.deleteAllFromAddress(idAddress);
            }
            addressDistributionCenterReposity.deleteAllById(idList);
        }

        if(!distributionCenterDTO.getNewAddresses().isEmpty()){
            Long currentID = addressDistributionCenterReposity.findLastId();
            Long idDistribution = distributionCenter.getId();
            for (AddressDistributionCenter addressDistributionCenter:
                 distributionCenterDTO.getNewAddresses()) {
                addressDistributionCenter.setId(++currentID);
                addressDistributionCenterReposity.saveNewAddress(addressDistributionCenter,idDistribution);
            }
        }

        distributionCenterReposity.updateDistributionCenter(distributionCenter);

        return ResponseEntity.status(HttpStatus.OK).body(distributionCenter);
    }


    @GetMapping("/all")
    public List<DistributionCenter> getAlls(){
        return distributionCenterReposity.findAll();
    }
}
