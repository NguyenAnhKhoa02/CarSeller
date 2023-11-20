package Backend.controller;

import Backend.model.Model;
import Backend.reposity.ModelReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("model")
public class modelController {

    @Autowired
    private ModelReposity modelReposity;

    @PostMapping("/save")
    public boolean saveModel(@RequestBody  Model model){
        modelReposity.save(model);
        return true;
    }

    @GetMapping("/all")
    public List<Model> getAllModel(){
        return modelReposity.findAll();
    }
}
