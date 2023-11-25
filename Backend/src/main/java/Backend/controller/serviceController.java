package Backend.controller;

import Backend.model.Service;
import Backend.reposity.ServiceReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class serviceController {
    @Autowired
    private ServiceReposity serviceReposity;
    @PostMapping("/save")
    public boolean saveService(@RequestBody Service service){
        serviceReposity.save(service);
        return true;
    }
}
