package Backend.controller;

import Backend.ModelDTO.ModelDTO;
import Backend.model.Model;
import Backend.repository.ModelRepository;
import Backend.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.*;
import java.nio.file.Files;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.*;

@RestController
@RequestMapping("/models")
public class modelController {

    @Autowired
    private ModelRepository modelRepository;

    @Autowired
    private FileService fileService;

    @PostMapping
    public @ResponseBody ResponseEntity<Model> saveModel(@ModelAttribute ModelDTO modelDTO) throws IOException, SQLException {
        fileService = new FileService();

        Model model = modelDTO.mappedModel();

        if(modelDTO.getImageFile() != null){
            fileService.copyFileFromMultiFile(modelDTO.getImageFile());
            model.setImageName(fileService.getNameFile());
        }else{
            model.setImageName("empty");
        }

        modelRepository.save(model);
        return new ResponseEntity<>(model, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Model>>  getAllModels(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Model> modelPage = modelRepository.findAll(pageable);

        return (ResponseEntity<Page<Model>>) ResponseEntity
                    .status(HttpStatus.OK)
                    .contentType(MediaType.valueOf("application/json"))
                    .body(modelPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Model> getOneModel(@PathVariable Long id) throws SQLException, IOException {
        Model model = modelRepository.findById(id).orElse(null);

        return ResponseEntity
                .ok()
                .body(model);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Model> updateModel(@ModelAttribute ModelDTO updatedModelDTO) {
        //Model existingModel = modelRepository.findById(id).orElse(null);

        Model model = updatedModelDTO.mappedModel();
        if(updatedModelDTO.getImageFile() != null){
            fileService = new FileService();

            fileService.copyFileFromMultiFile(updatedModelDTO.getImageFile());
            model.setImageName(fileService.getNameFile());
        } else if (updatedModelDTO.getImageName() != null) {
            model.setImageName(updatedModelDTO.getImageName());
        }else{
            model.setImageName("empty");
        }

        modelRepository.updateModel(model);
        return ResponseEntity.status(HttpStatus.OK).body(model);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModel(@PathVariable Long id) {
        modelRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*for fetch*/
    @GetMapping("/all")
    public List<Model> getAll(){
        return modelRepository.findAll();
    }
}
