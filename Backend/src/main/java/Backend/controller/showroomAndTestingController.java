package Backend.controller;

import Backend.model.ServicePlan;
import Backend.model.ShowroomAndTesting;
import Backend.repository.ShowroomAndTestingResposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/showroomAndTestings")
public class showroomAndTestingController {
    @Autowired
    private ShowroomAndTestingResposity showroomAndTestingResposity;

    @GetMapping
    public ResponseEntity<Page<ShowroomAndTesting>> getAllServicePlans(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<ShowroomAndTesting> showroomAndTestingPage = showroomAndTestingResposity.findAll(pageable);

        return new ResponseEntity<>(showroomAndTestingPage, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ShowroomAndTesting> saveShowroomAndTesting(){

        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/all")
    public List<ShowroomAndTesting> getAlls(){
        return showroomAndTestingResposity.findAll();
    }
}
