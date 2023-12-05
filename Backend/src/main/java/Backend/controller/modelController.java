package Backend.controller;

import Backend.model.Model;
import Backend.repository.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/models")
public class modelController {

    @Autowired
    private ModelRepository modelRepository;

    @PostMapping
    public ResponseEntity<Model> saveModel(@RequestBody Model model) {
        Model savedModel = modelRepository.save(model);
        return new ResponseEntity<>(savedModel, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Model>>  getAllModels(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Model> modelPage = modelRepository.findAll(pageable);
        return new ResponseEntity<>(modelPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Model> getOneModel(@PathVariable Long id) {
        Model model = modelRepository.findById(id).orElse(null);
        if (model != null) {
            return new ResponseEntity<>(model, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id={id}")
    public ArrayList<Model> getModelFromUrlId(@PathVariable Long id) {
        Model model = modelRepository.findById(id).orElse(null);
        ArrayList<Model> arrayList = new ArrayList<>();
        arrayList.add(model);
        return arrayList;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Model> updateModel(@PathVariable Long id, @RequestBody Model updatedModel) {
        Model existingModel = modelRepository.findById(id).orElse(null);

        if (existingModel != null) {
            existingModel.setNameModel(updatedModel.getNameModel());
            modelRepository.save(existingModel);
            return new ResponseEntity<>(existingModel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModel(@PathVariable Long id) {
        modelRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*for fetch*/
    @GetMapping("/all")
    @CrossOrigin("http://localhost:3000/SanPham/TatCaDongXe")
    public List<Model> getAll(){
        return modelRepository.findAll();
    }
}
