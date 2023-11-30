package Backend.controller;

import Backend.model.Model;
import Backend.reposity.ModelReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/models")

public class modelController {

    @Autowired
    private ModelReposity modelReposity;

    @PostMapping("/save")
    public boolean saveModel(@RequestBody  Model model){
        modelReposity.save(model);
        return true;
    }

    @GetMapping
    public ResponseEntity<List<Model>> getAllModels() {
        List<Model> modelList = modelReposity.findAll();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        headers.add("X-Total-Count", String.valueOf(modelList.size()));

        return new ResponseEntity<>(modelList, headers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Model> getOneModel(@PathVariable Long id) {
        Model model = modelReposity.findById(id).orElse(null);

        if (model != null) {
            return new ResponseEntity<>(model, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Model> createModel(@RequestBody Model model) {
        Model createdModel = modelReposity.save(model);
        return new ResponseEntity<>(createdModel, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Model> updateModel(@PathVariable Long id, @RequestBody Model updatedModel) {
        Model existingModel = modelReposity.findById(id).orElse(null);

        if (existingModel != null) {
            existingModel.setNameModel(updatedModel.getNameModel());
            // Cập nhật các trường khác nếu cần
            modelReposity.save(existingModel);
            return new ResponseEntity<>(existingModel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModel(@PathVariable Long id) {
        modelReposity.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}