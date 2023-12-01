package Backend.controller;

import Backend.model.Service;
import Backend.repository.ServiceRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/service")
public class serviceController {
    @Autowired
    private ServiceRepository serviceRepository;
    @PostMapping("/save")
    public boolean saveService(@RequestBody Service service){
        serviceRepository.save(service);
        return true;
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Service> getAllServices(HttpServletResponse response){
        List<Service> serviceList = serviceRepository.findAll();

        response.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addDateHeader("X-Total-Count", serviceList.size());

        return serviceList;
    }
}
