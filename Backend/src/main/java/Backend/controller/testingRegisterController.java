package Backend.controller;

import Backend.model.ServicePlan;
import Backend.model.TestingRegister;
import Backend.reposity.TestingRegisterReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/testingRegister")
public class testingRegisterController {
    @Autowired
    private TestingRegisterReposity testingRegisterReposity;
    @GetMapping("/all")
    public List<TestingRegister> getAllTestingRegister(){
        return testingRegisterReposity.findAll();
    }
}
