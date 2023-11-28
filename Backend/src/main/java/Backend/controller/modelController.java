package Backend.controller;

import Backend.model.Model;
import Backend.reposity.ModelReposity;
import jakarta.servlet.http.HttpServletResponse;
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
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Model> getAllModel(HttpServletResponse response) {
        List<Model> modelList = modelReposity.findAll();

        response.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addDateHeader("X-Total-Count", modelList.size());
        return modelList;
    }
}
