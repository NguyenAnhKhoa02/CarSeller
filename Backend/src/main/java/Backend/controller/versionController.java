package Backend.controller;

import Backend.model.Version;
import Backend.repository.ColorRepository;
import Backend.repository.VersionRepository;
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
@RequestMapping("/versions")
public class versionController {

    @Autowired
    private VersionRepository versionRepository;

    @Autowired
    private ColorRepository colorRepository;

    @PostMapping
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Version> saveVersion(@RequestBody Version version) {
        Version savedVersion = versionRepository.save(version);
        return new ResponseEntity<>(savedVersion, HttpStatus.CREATED);
    }


//    @PostMapping("/update")
//    public boolean updateVersion(@RequestBody Version version){
//        if(version.getId() == null) return false;
//        if(version.getCar() == null) return false;
//        if(version.getCar().getCarId() == null) return false;
//        if(versionRepository.checkVersionName(version.getNameVersion()) == 1) return  false;
//        if(!carRepository.existsById(version.getCar().getCarId())) return  false;
//        if(!versionRepository.existsById(version.getId())) return false;
//        if(!modelRepository.existsById(version.getModelId())) return false;
//
//        List<Color> colors = versionRepository.findById(version.getId()).get().getCar().getColors();
//        for (Color color:
//             colors) {
//            colorRepository.deleteFromId(color.getId());
//        }
//
//        for (Color color:
//             version.getCar().getColors()) {
//            colorRepository.updateColor(color.getColor(),color.getUrl(),version.getCar().getCarId());
//        }
//
//        versionRepository.updateVersion(version);
//
//        return true;
//    }

//    @GetMapping("/{modelName}/{versionName}")
//    @ResponseBody
//    public Version getVersion(@PathVariable String modelName, @PathVariable String versionName){
//        if(versionRepository.checkVersionName(versionName) == 0) return null;
//        if(modelRepository.checkNameModel(modelName) == 0) return  null;
//
//        return versionRepository.getVersionByModelAndNameVersion(modelName,versionName);
//    }
//
//    @GetMapping("/{modelName}")
//    @ResponseBody
//    public List<Version>  getAllVersionsFromModelName(@PathVariable(required = false) String modelName){
//        return versionRepository.getAllVersionsFromModelName(modelName);
//    }

    @GetMapping
    public ResponseEntity<Page<Version>> getAllVersions(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Version> versionPage = versionRepository.findAll(pageable);
        return new ResponseEntity<>(versionPage, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Version> getOneVersion(@PathVariable Long id) {
        Version version = versionRepository.findById(id).orElse(null);
        if (version != null) {
            return new ResponseEntity<>(version, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/id={id}")
    public ArrayList<Version> getVersionFromUrlId(@PathVariable Long id) {
        Version version = versionRepository.findById(id).orElse(null);
        ArrayList<Version> arrayList = new ArrayList<>();
        arrayList.add(version);
        return arrayList;
    }
    @PutMapping("/edit/{id}")
    public ResponseEntity<Version> updatedVersion(@PathVariable Long id, @RequestBody Version updatedVersion) {
        Version existingVersion = versionRepository.findById(id).orElse(null);

        if (existingVersion != null) {
            existingVersion.setNameVersion(updatedVersion.getNameVersion());
            existingVersion.setNumCarSeat(updatedVersion.getNumCarSeat());
            existingVersion.setInfo(updatedVersion.getInfo());
            existingVersion.setGasCap(updatedVersion.getGasCap());
            existingVersion.setFrontBrakes(updatedVersion.getFrontBrakes());
            existingVersion.setRearBrakes(updatedVersion.getRearBrakes());
            existingVersion.setFrontFogLight(updatedVersion.getFrontFogLight());
            existingVersion.setDoorHandle(updatedVersion.getDoorHandle());
            existingVersion.setWiperBlade(updatedVersion.getWiperBlade());
            existingVersion.setWrappedSteeringWheelAndGearLever(updatedVersion.getWrappedSteeringWheelAndGearLever());
            existingVersion.setSeatMaterial(updatedVersion.getSeatMaterial());
            existingVersion.setAirBag(updatedVersion.getAirBag());
            existingVersion.setBackCamera(updatedVersion.getBackCamera());
            existingVersion.setAntiTheft(updatedVersion.getAntiTheft());
            existingVersion.setAutoLock(updatedVersion.getAutoLock());
            existingVersion.setPrice(updatedVersion.getPrice());
            versionRepository.save(existingVersion);
            return new ResponseEntity<>(existingVersion, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVersion(@PathVariable Long id) {
        versionRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
