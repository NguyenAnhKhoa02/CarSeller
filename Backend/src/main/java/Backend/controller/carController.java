package Backend.controller;

import Backend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("car")
public class carController {

    @Autowired
    private CarRepository carRepository;
}
