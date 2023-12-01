package Backend.controller;

import Backend.model.Color;
import Backend.model.Version;
import Backend.repository.CarRepository;
import Backend.repository.ColorRepository;
import Backend.repository.ModelRepository;
import Backend.repository.VersionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("version")
public class versionController {

    @Autowired
    private VersionRepository versionRepository;

    @Autowired
    private ModelRepository modelRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private ColorRepository colorRepository;

    @PostMapping("/save")
    public boolean saveVersion(@RequestBody Version version){
        if(version.getModelId() == null) return false;
        if(!modelRepository.existsById(version.getModelId().getId())) return false;
        versionRepository.save(version);

        return true;
    }

    @PostMapping("/update")
    public boolean updateVersion(@RequestBody Version version){
        if(version.getId() == null) return false;
        if(version.getCar() == null) return false;
        if(version.getCar().getCarId() == null) return false;
        if(versionRepository.checkVersionName(version.getNameVersion()) == 1) return  false;
        if(!carRepository.existsById(version.getCar().getCarId())) return  false;
        if(!versionRepository.existsById(version.getId())) return false;
        if(!modelRepository.existsById(version.getModelId().getId())) return false;

        List<Color> colors = versionRepository.findById(version.getId()).get().getCar().getColors();
        for (Color color:
             colors) {
            colorRepository.deleteFromId(color.getId());
        }

        for (Color color:
             version.getCar().getColors()) {
            colorRepository.updateColor(color.getColor(),color.getUrl(),version.getCar().getCarId());
        }

        versionRepository.updateVersion(version);

        return true;
    }

    @GetMapping("/{modelName}/{versionName}")
    @ResponseBody
    public Version getVersion(@PathVariable String modelName, @PathVariable String versionName){
        if(versionRepository.checkVersionName(versionName) == 0) return null;
        if(modelRepository.checkNameModel(modelName) == 0) return  null;

        return versionRepository.getVersionByModelAndNameVersion(modelName,versionName);
    }

    @GetMapping("/{modelName}")
    @ResponseBody
    public List<Version>  getAllVersionsFromModelName(@PathVariable(required = false) String modelName){
        return versionRepository.getAllVersionsFromModelName(modelName);
    }
}
