package Backend.controller;

import Backend.ModelDTO.TestingRegisterDTO;
import Backend.model.DistributionCenter;
import Backend.model.TestingRegister;
import Backend.model.Version;
import Backend.repository.DistributionCenterReposity;
import Backend.repository.ModelRepository;
import Backend.repository.TestingRegisterRepository;
import Backend.repository.VersionRepository;
import Backend.services.GmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/testing_Registers")
public class testingRegisterController {

    @Autowired
    private TestingRegisterRepository testingRegisterRepository;

    @Autowired
    private GmailService gmailService;

    @Autowired
    private VersionRepository versionRepository;

    @Autowired
    private DistributionCenterReposity distributionCenterReposity;

    @GetMapping
    public ResponseEntity<Page<TestingRegister>>  getAllTestingRegisters(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<TestingRegister> testingRegisterPage = testingRegisterRepository.findAll(pageable);

        return new ResponseEntity<>(testingRegisterPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestingRegister> getOneTestingRegister(@PathVariable Long id) {
        TestingRegister testingRegister = testingRegisterRepository.findById(id).orElse(null);
        if (testingRegister != null) {
            return new ResponseEntity<>(testingRegister, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id={id}")
    public ArrayList<TestingRegister> getTestingRegisterFromUrlId(@PathVariable Long id) {
        TestingRegister testingRegister = testingRegisterRepository.findById(id).orElse(null);
        ArrayList<TestingRegister> arrayList = new ArrayList<>();
        arrayList.add(testingRegister);
        return arrayList;
    }

    @PutMapping("/{id}")
    public ResponseEntity<TestingRegister> updateTestingRegister(@PathVariable Long id, @RequestBody TestingRegister updatedTestingRegister) {
        TestingRegister existingTestingRegister = testingRegisterRepository.findById(id).orElse(null);

        if (existingTestingRegister != null) {
            existingTestingRegister.setStatus(updatedTestingRegister.getStatus());
            testingRegisterRepository.save(existingTestingRegister);
            return new ResponseEntity<>(existingTestingRegister, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTestingRegister(@PathVariable Long id) {
        testingRegisterRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/save")
    public ResponseEntity<TestingRegister> saveTestingRegister(@RequestBody TestingRegisterDTO testingRegisterDTO){

        TestingRegister testingRegister = testingRegisterDTO.mappedTestingRegister();
        Long idVersion = testingRegisterDTO.getVersionId();
        Long idDistribution = testingRegisterDTO.getDistributionCenterId();

        Long lastId = testingRegisterRepository.getLastId();
        if(lastId == null) testingRegister.setId(1L);
        else testingRegister.setId(++lastId);
        testingRegisterRepository.saveTestingRegister(testingRegister,idVersion, idDistribution);

        String nameVersion = versionRepository.findNameVersion(testingRegisterDTO.getVersionId());
        String nameDistributionCenter = distributionCenterReposity.findNameDistributionCenter(testingRegisterDTO.getDistributionCenterId());

        gmailService.sendingGmailTestingRegister(testingRegister,nameVersion,nameDistributionCenter);

        return ResponseEntity.ok().body(null);
    }
}