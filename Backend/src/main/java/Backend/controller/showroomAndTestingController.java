package Backend.controller;

import Backend.model.ShowroomAndTesting;
import Backend.repository.ShowroomAndTestingResposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/showroomAndTestings")
public class showroomAndTestingController {

    @Autowired
    ShowroomAndTestingResposity showroomAndTestingResposity;

    @GetMapping("/nameAddress/{id}")
    public String getNameAddrress(@PathVariable Long id){

        return showroomAndTestingResposity.findNameAddressById(id);
    }

    @GetMapping("/nameDistribution/{id}")
    public String getNameDistribution(@PathVariable Long id){
        return showroomAndTestingResposity.findNameDistributionById(id);
    }

    @GetMapping("/hotline/{id}")
    public String getHotlineDistribution(@PathVariable Long id){
        return showroomAndTestingResposity.findHotlineDistributinoById(id);
    }

    @GetMapping("/all")
    public List<ShowroomAndTesting> getAll(){
        return showroomAndTestingResposity.findAll();
    }
}
