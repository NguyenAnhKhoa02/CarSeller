package Backend.controller;

import Backend.ModelDTO.NewspaperDTO;
import Backend.model.Newspaper;
import Backend.repository.NewspaperRepository;
import Backend.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.sql.*;
import java.util.*;

@RestController
@RequestMapping("/newspapers")
public class newspaperController {

    @Autowired
    private NewspaperRepository newspaperRepository;

    @Autowired
    private FileService fileService;

    @PostMapping
    public @ResponseBody ResponseEntity<Newspaper> saveNewspaper(@ModelAttribute NewspaperDTO newspaperDTO) throws IOException, SQLException {
        fileService = new FileService();
        Newspaper newspaper = newspaperDTO.mappedNewspaper();
        if(newspaperDTO.getImageFile() != null){
            fileService.copyFileFromMultiFile(newspaperDTO.getImageFile());
            newspaper.setImageName(fileService.getNameFile());
        }else{
            newspaper.setImageName("empty");
        }
        newspaperRepository.save(newspaper);
        return new ResponseEntity<>(newspaper, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Newspaper>>  getAllNewspapers(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Newspaper> newspaperPage = newspaperRepository.findAll(pageable);
        return (ResponseEntity<Page<Newspaper>>) ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("application/json"))
                .body(newspaperPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Newspaper> getOneNewspaper(@PathVariable Long id) throws SQLException, IOException {
        Newspaper newspaper = newspaperRepository.findById(id).orElse(null);
        return ResponseEntity
                .ok()
                .body(newspaper);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Newspaper> updateNewspaper(@ModelAttribute NewspaperDTO updateNewspaperDTO) {
        Newspaper newspaper = updateNewspaperDTO.mappedNewspaper();
        if(updateNewspaperDTO.getImageFile() != null){
            fileService = new FileService();
            fileService.copyFileFromMultiFile(updateNewspaperDTO.getImageFile());
            newspaper.setImageName(fileService.getNameFile());
        } else if (updateNewspaperDTO.getImageName() != null) {
            newspaper.setImageName(updateNewspaperDTO.getImageName());
        }else{
            newspaper.setImageName("empty");
        }
        newspaperRepository.updateNewspaper(newspaper);
        return ResponseEntity.status(HttpStatus.OK).body(newspaper);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNewspaper(@PathVariable Long id) {
        newspaperRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*for fetch*/
    @GetMapping("/all")
    public List<Newspaper> getAll(){
        return newspaperRepository.findAll();
    }
}