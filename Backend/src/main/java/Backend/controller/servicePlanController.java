package Backend.controller;

import Backend.ModelDTO.ServicePlanDTO;
import Backend.model.Service;
import Backend.model.ServicePlan;
import Backend.repository.ModelRepository;
import Backend.repository.ServicePlanRepository;
import Backend.repository.ServiceRepository;
import Backend.services.GmailService;
import netscape.javascript.JSObject;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;

@RestController
@RequestMapping("/service_Plans")
public class servicePlanController {
    @Autowired
    private ServicePlanRepository servicePlanRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ModelRepository modelRepository;

    @Autowired
    private GmailService gmailService;

    @GetMapping
    public ResponseEntity<Page<ServicePlan>>  getAllServicePlans(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<ServicePlan> servicePlanPage = servicePlanRepository.findAll(pageable);

        return new ResponseEntity<>(servicePlanPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServicePlan> getOneServicePlan(@PathVariable Long id) {
        ServicePlan servicePlan = servicePlanRepository.findById(id).orElse(null);
        if (servicePlan != null) {
            return new ResponseEntity<>(servicePlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id={id}")
    public ArrayList<ServicePlan> getServicePlanFromUrlId(@PathVariable Long id) {
        ServicePlan servicePlan = servicePlanRepository.findById(id).orElse(null);
        ArrayList<ServicePlan> arrayList = new ArrayList<>();
        arrayList.add(servicePlan);
        return arrayList;
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServicePlan> updateServicePlan(@PathVariable Long id, @RequestBody ServicePlan updatedServicePlan) {
        ServicePlan existingServicePlan = servicePlanRepository.findById(id).orElse(null);

        if (existingServicePlan != null) {
            existingServicePlan.setStatus(updatedServicePlan.getStatus());
            servicePlanRepository.save(existingServicePlan);
            return new ResponseEntity<>(existingServicePlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServicePlan(@PathVariable Long id) {
        servicePlanRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/save")
    public  ResponseEntity<ServicePlan> saveServicePlan(@RequestBody ServicePlanDTO servicePlanDTO) throws ParseException {
            ServicePlan servicePlan = servicePlanDTO.mappedServicePlan();

            servicePlanRepository.saveServicePlan(servicePlan,servicePlanDTO.getServiceId(), servicePlanDTO.getModelId());

        String serviceName = serviceRepository.findNameService(servicePlanDTO.getServiceId());
        String modelName = modelRepository.findNameModel(servicePlanDTO.getModelId());

        gmailService.sendingGmailServicePlan(servicePlan,modelName,serviceName);

        return new  ResponseEntity<>(servicePlan,HttpStatus.CREATED);
    }
}