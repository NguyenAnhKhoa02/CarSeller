package Backend.controller;

import Backend.model.Car;
import Backend.model.Model;
import Backend.model.Version;
import Backend.reposity.CarReposity;
import Backend.reposity.ModelReposity;
import Backend.reposity.VersionReposity;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("car")
public class carController {

    @Autowired
    private CarReposity carReposity;
}
