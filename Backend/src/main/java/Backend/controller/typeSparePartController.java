package Backend.controller;

import Backend.ModelDTO.TypeSparePartDTO;
import Backend.model.SparePart;
import Backend.model.TypeSparePart;
import Backend.repository.SparePartRepository;
import Backend.repository.TypeSparePartRepository;
import Backend.services.FileService;
import org.apache.tomcat.util.json.ParseException;
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
@RequestMapping("/type_Spare_Parts")
public class typeSparePartController {

    @Autowired
    private TypeSparePartRepository typeSparePartRepository;

    @Autowired
    private SparePartRepository sparePartRepository;

    @Autowired
    private FileService fileService;

    @PostMapping
    public ResponseEntity<TypeSparePart> saveTypeAccessory(@ModelAttribute TypeSparePartDTO typeSparePartDTO) throws ParseException {
        TypeSparePart typeSparePart = new TypeSparePart();
        typeSparePart = typeSparePartDTO.mappedTypeAccessory();
        if(typeSparePartDTO.getSparePartFiles() != null)
            for (MultipartFile multipartFile:
                    typeSparePartDTO.getSparePartFiles()) {
                fileService.copyFileFromMultiFile(multipartFile);
            }

        List<SparePart> sparePartList = new ArrayList<>();
        if(typeSparePartDTO.getSparePartFiles() != null){
            if(typeSparePartDTO.getSparePartFiles().size()> 0){
                for (JSONObject jsonObject:
                        typeSparePartDTO.getSpareParts()) {
                    SparePart sparePart = new SparePart();
                    sparePart.setNameSparePart(jsonObject.getString("nameSparePart"));
                    sparePart.setImageName(jsonObject.getString("imageName"));
                    sparePartList.add(sparePart);
                }
                typeSparePart.setSpareParts(sparePartList);
            }
        }

        typeSparePartRepository.save(typeSparePart);

        return new ResponseEntity<>(typeSparePart, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<TypeSparePart>> getAllTypeAccessorys(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<TypeSparePart> typeAccessoryPage = typeSparePartRepository.findAll(pageable);

        return new ResponseEntity<>(typeAccessoryPage, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<TypeSparePart> getOneTypeAccessory(@PathVariable Long id) {
        TypeSparePart typeSparePart = typeSparePartRepository.findById(id).orElse(null);
        if (typeSparePart != null) {
            return new ResponseEntity<>(typeSparePart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/id={id}")
    public ArrayList<TypeSparePart> getTypeAccessoryFromUrlId(@PathVariable Long id) {
        TypeSparePart typeSparePart = typeSparePartRepository.findById(id).orElse(null);
        ArrayList<TypeSparePart> arrayList = new ArrayList<>();
        arrayList.add(typeSparePart);
        return arrayList;
    }


    @PutMapping("/{id}")
    public ResponseEntity<TypeSparePart> updatedTypeAccessory(@ModelAttribute TypeSparePartDTO typeSparePartDTO) {
        TypeSparePart typeSparePart = typeSparePartDTO.mappedTypeAccessory();
        List<SparePart> sparePartList = new ArrayList<>();

        for (JSONObject jsonObj:
                typeSparePartDTO.getSpareParts()) {
            SparePart sparePart = new SparePart();
            sparePart.setNameSparePart(jsonObj.getString("nameSparePart"));
            sparePart.setImageName(jsonObj.getString("imageName"));
            sparePartList.add(sparePart);
        }

        if(typeSparePartDTO.getSparePartFiles() != null)
            for (MultipartFile multipartFile:
                    typeSparePartDTO.getSparePartFiles()) {
                fileService.copyFileFromMultiFile(multipartFile);
            }

        sparePartRepository.deleteAllSparePart(typeSparePart.getId());

        for (int i = 0; i < sparePartList.size(); i++) {
            sparePartRepository.saveSparePart(sparePartList.get(i), typeSparePart.getId());
        }

        typeSparePartRepository.updateTypeAccessory(typeSparePart);
        return new ResponseEntity<>(typeSparePart, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTypeAccessory(@PathVariable Long id) {
        typeSparePartRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*for fetch*/
    @GetMapping("/all")
    public List<TypeSparePart> getAll(){return typeSparePartRepository.findAll();};
}
