package Backend.controller;

import Backend.model.Color;
import Backend.model.Version;
import Backend.reposity.CarReposity;
import Backend.reposity.ColorResposity;
import Backend.reposity.ModelReposity;
import Backend.reposity.VersionReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("version")
public class versionController {

    @Autowired
    private VersionReposity versionReposity;

    @Autowired
    private ModelReposity modelReposity;

    @Autowired
    private CarReposity carReposity;

    @Autowired
    private ColorResposity colorResposity;

    @PostMapping("/save")
    public boolean saveVersion(@RequestBody Version version){
        if(version.getModelId() == null) return false;
        if(!modelReposity.existsById(version.getModelId().getId())) return false;
        versionReposity.save(version);

        return true;
    }

    @PostMapping("/update")
    public boolean updateVersion(@RequestBody Version version){
        if(version.getId() == null) return false;
        if(version.getCar() == null) return false;
        if(version.getCar().getCarId() == null) return false;
        if(versionReposity.checkVersionName(version.getNameVersion()) == 1) return  false;
        if(!carReposity.existsById(version.getCar().getCarId())) return  false;
        if(!versionReposity.existsById(version.getId())) return false;
        if(!modelReposity.existsById(version.getModelId().getId())) return false;

        List<Color> colors = versionReposity.findById(version.getId()).get().getCar().getColors();
        for (Color color:
             colors) {
            colorResposity.deleteFromId(color.getId());
        }

        for (Color color:
             version.getCar().getColors()) {
            colorResposity.updateColor(color.getColor(),color.getUrl(),version.getCar().getCarId());
        }

        versionReposity.updateVersion(version);

        return true;
    }

    @GetMapping("/{modelName}/{versionName}")
    @ResponseBody
    public Version getVersion(@PathVariable String modelName, @PathVariable String versionName){
        if(versionReposity.checkVersionName(versionName) == 0) return null;
        if(modelReposity.checkNameModel(modelName) == 0) return  null;

        return versionReposity.getVersionByModelAndNameVersion(modelName,versionName);
    }

    @GetMapping("/{modelName}")
    @ResponseBody
    public List<Version>  getAllVersionsFromModelName(@PathVariable(required = false) String modelName){
        return versionReposity.getAllVersionsFromModelName(modelName);
    }
}
