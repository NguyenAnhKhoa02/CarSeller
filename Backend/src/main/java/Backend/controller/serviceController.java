package Backend.controller;

import Backend.model.Model;
import Backend.model.Service;
import Backend.repository.ServiceRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class serviceController {
    @Autowired
    private ServiceRepository serviceRepository;
    @PostMapping("/save")
    public boolean saveService(@RequestBody Service service){
        serviceRepository.save(service);
        return true;
    }
    @GetMapping
    public ResponseEntity<Page<Service>> getAllServices(
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
}