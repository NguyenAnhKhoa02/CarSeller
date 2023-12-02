package Backend.controller;

import Backend.model.Color;
import Backend.repository.ColorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/colors")
public class colorController {

    @Autowired
    private ColorRepository colorRepository;

    @PostMapping
    public ResponseEntity<Color> saveColor(@RequestBody Color color) {
        Color savedColor = colorRepository.save(color);
        return new ResponseEntity<>(savedColor, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Color>>  getAllColors(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Color> colorPage = colorRepository.findAll(pageable);
        return new ResponseEntity<>(colorPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Color> getOneColor(@PathVariable Long id) {
        Color color = colorRepository.findById(id).orElse(null);
        if (color != null) {
            return new ResponseEntity<>(color, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id={id}")
    public ArrayList<Color> getColorFromUrlId(@PathVariable Long id) {
        Color color = colorRepository.findById(id).orElse(null);
        ArrayList<Color> arrayList = new ArrayList<>();
        arrayList.add(color);
        return arrayList;
    }
}
