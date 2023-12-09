package Backend.controller;

import Backend.ModelDTO.ColorDTO;
import Backend.ModelDTO.VersionDTO;
import Backend.model.Color;
import Backend.model.Version;
import Backend.repository.ColorRepository;
import Backend.repository.VersionRepository;
import Backend.services.FileService;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/versions")
public class versionController {

    @Autowired
    private VersionRepository versionRepository;

    @Autowired
    private ColorRepository colorRepository;

    @Autowired
    private FileService fileService;

    @PostMapping
    public ResponseEntity<Version> saveVersion(@ModelAttribute VersionDTO versionDTO) throws ParseException {
//        Version savedVersion = versionRepository.save(version);
        Version version = new Version();
        version = versionDTO.mappedVersion();

        if(versionDTO.getColorFiles() != null)
            for (MultipartFile multipartFile:
                 versionDTO.getColorFiles()) {
                fileService.copyFileFromMultiFile(multipartFile);
            }

        List<Color> colorList = new ArrayList<>();

        if(colorList.size() > 0){
            for (JSONObject jsonObject:
                    versionDTO.getColors()) {
                Color color = new Color();
                color.setColor(jsonObject.getString("color"));
                color.setImageName(jsonObject.getString("imageName"));
                colorList.add(color);
            }
            version.setColors(colorList);
        }

        versionRepository.save(version);

        return new ResponseEntity<>(version, HttpStatus.CREATED);
    }

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


    @PutMapping("/{id}")
    public ResponseEntity<Version> updatedVersion(@ModelAttribute VersionDTO versionDTO) {
        Version version = versionDTO.mappedVersion();
        List<Color> colorList = new ArrayList<>();

        for (JSONObject jsonObj:
                versionDTO.getColors()) {
            Color color = new Color();
            color.setColor(jsonObj.getString("color"));
            color.setImageName(jsonObj.getString("imageName"));
            colorList.add(color);
        }

        if(versionDTO.getColorFiles() != null)
            for (MultipartFile multipartFile:
                 versionDTO.getColorFiles()) {
                fileService.copyFileFromMultiFile(multipartFile);
            }

        colorRepository.deleteAllColor(version.getId());

        for (int i = 0; i < colorList.size(); i++) {
            colorRepository.saveColor(colorList.get(i),version.getId());
        }

        versionRepository.updateVersion(version);
        return new ResponseEntity<>(version, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVersion(@PathVariable Long id) {
        versionRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*for fetch*/
    @GetMapping("/modelId={id}")
    public List<Version> getVersionsByModelId(@PathVariable Integer id){
        return versionRepository.findByModelId(id);
    }
}
