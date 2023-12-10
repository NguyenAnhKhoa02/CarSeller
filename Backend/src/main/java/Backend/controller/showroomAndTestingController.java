package Backend.controller;

import Backend.model.ShowroomAndTesting;
import Backend.repository.ShowroomAndTestingResposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/showroomAndTestings")
public class showroomAndTestingController {
    @Autowired
    private ShowroomAndTestingResposity showroomAndTestingResposity;

    @GetMapping("/all")
    public List<ShowroomAndTesting> getAlls(){
        return showroomAndTestingResposity.findAll();
    }
}
