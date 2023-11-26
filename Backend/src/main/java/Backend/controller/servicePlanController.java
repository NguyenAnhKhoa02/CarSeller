package Backend.controller;

import Backend.model.ServicePlan;
import Backend.reposity.ServicePlanReposity;
import Backend.services.GmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("servicePlan")
public class servicePlanController {
    @Autowired
    private ServicePlanReposity servicePlanReposity;
    @Autowired
    private GmailService gmailService;
    @PostMapping("/save")
    public boolean saveServicePlan(@RequestBody ServicePlan servicePlan){
        servicePlanReposity.save(servicePlan);
        gmailService.sendingGmailServicePlan(servicePlan);
        return true;
    }
    @GetMapping("/{fullName}")
    @ResponseBody
    public boolean saveServicePlan(@PathVariable String fullName){
        servicePlanReposity.checkServicePlanName(fullName);
        return true;
    }
    @GetMapping("/all")
    @ResponseBody
    public List<ServicePlan> getAllServiceName(){

        return servicePlanReposity.findAll();
    }

}
