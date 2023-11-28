package Backend.controller;

import Backend.model.ServicePlan;
import Backend.model.TestingRegister;
import Backend.reposity.TestingRegisterReposity;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    @CrossOrigin(origins = "http://localhost:3000")
    public List<TestingRegister> getAllTestingRegister(HttpServletResponse response){
        List<TestingRegister> testingRegistersList = testingRegisterReposity.findAll();

        response.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addDateHeader("X-Total-Count", testingRegistersList.size());

        return testingRegisterReposity.findAll();
    }
}
