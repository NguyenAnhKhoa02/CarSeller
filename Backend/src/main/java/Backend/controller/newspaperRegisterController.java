package Backend.controller;

import Backend.ModelDTO.NewspaperDTO;
import Backend.ModelDTO.NewspaperRegisterDTO;
import Backend.model.Newspaper;
import Backend.model.NewspaperRegister;
import Backend.repository.NewspaperRegisterReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/newspaperRegisters")
public class newspaperRegisterController {

    @Autowired
    NewspaperRegisterReposity newspaperRegisterReposity;

    @GetMapping
    public ResponseEntity<Page<NewspaperRegister>>  getAllNewspapers(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<NewspaperRegister> newspaperRegisterPage = newspaperRegisterReposity.findAll(pageable);
        return (ResponseEntity<Page<NewspaperRegister>>) ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("application/json"))
                .body(newspaperRegisterPage);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNewspaperRegisterController(@PathVariable Long id) {
        newspaperRegisterReposity.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/save")
    public ResponseEntity<NewspaperRegister> saveNewspaperRegister(@RequestBody NewspaperRegisterDTO newspaperRegisterDTO){
        NewspaperRegister newspaperRegister = newspaperRegisterDTO.mappedNewspaperRegister();
        newspaperRegisterReposity.save(newspaperRegister);
        return ResponseEntity.ok().body(newspaperRegister);
    }
}
