package Backend.controller;

import Backend.model.Service;
import Backend.repository.ServiceRepository;
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

@RestController
@RequestMapping("/services")
public class serviceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @PostMapping
    public ResponseEntity<Service> saveService(@RequestBody Service service) {
        Service savedService = serviceRepository.save(service);
        return new ResponseEntity<>(savedService, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Service>>  getAllServices(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Service> servicePage = serviceRepository.findAll(pageable);
        return new ResponseEntity<>(servicePage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> getOneService(@PathVariable Long id) {
        Service service = serviceRepository.findById(id).orElse(null);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id={id}")
    public ArrayList<Service> getServiceFromUrlId(@PathVariable Long id) {
        Service service = serviceRepository.findById(id).orElse(null);
        ArrayList<Service> arrayList = new ArrayList<>();
        arrayList.add(service);
        return arrayList;
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service updatedService) {
        Service existingService = serviceRepository.findById(id).orElse(null);

        if (existingService != null) {
            existingService.setNameService(updatedService.getNameService());
            serviceRepository.save(existingService);
            return new ResponseEntity<>(existingService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        serviceRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /* for fetch*/
    @GetMapping("/all")
    public List<Service> getAll(){
        return serviceRepository.findAll();
    }
}
