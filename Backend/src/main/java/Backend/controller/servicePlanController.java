package Backend.controller;

import Backend.model.ServicePlan;
import Backend.repository.ServicePlanRepository;
import Backend.services.GmailService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("servicePlan")
public class servicePlanController {
    @Autowired
    private ServicePlanRepository servicePlanRepository;
    @Autowired
    private GmailService gmailService;
    @PostMapping("/save")
    public boolean saveServicePlan(@RequestBody ServicePlan servicePlan){
        servicePlanRepository.save(servicePlan);
        gmailService.sendingGmailServicePlan(servicePlan);
        return true;
    }
    @GetMapping("/{fullName}")
    @ResponseBody
    public boolean saveServicePlan(@PathVariable String fullName){
        servicePlanRepository.checkServicePlanName(fullName);
        return true;
    }
    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<ServicePlan> getAllServiceName(HttpServletResponse response){
        List<ServicePlan> servicePlans = servicePlanRepository.findAll();

        response.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addDateHeader("X-Total-Count", servicePlans.size());
        return servicePlanRepository.findAll();
    }

}
