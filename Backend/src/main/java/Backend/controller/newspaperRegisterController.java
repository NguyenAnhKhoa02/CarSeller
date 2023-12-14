package Backend.controller;

import Backend.ModelDTO.NewspaperDTO;
import Backend.ModelDTO.NewspaperRegisterDTO;
import Backend.model.NewspaperRegister;
import Backend.repository.NewspaperRegisterReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/newspaperRegisters")
public class newspaperRegisterController {

    @Autowired
    NewspaperRegisterReposity newspaperRegisterReposity;

    @PostMapping("/save")
    public ResponseEntity<NewspaperRegister> saveNewspaperRegister(@RequestBody NewspaperRegisterDTO newspaperRegisterDTO){
        NewspaperRegister newspaperRegister = newspaperRegisterDTO.mappedNewspaperRegister();
        newspaperRegisterReposity.save(newspaperRegister);
        return ResponseEntity.ok().body(newspaperRegister);
    }
}
