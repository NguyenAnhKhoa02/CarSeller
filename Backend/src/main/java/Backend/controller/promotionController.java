package Backend.controller;

import Backend.ModelDTO.PromotionDTO;
import Backend.model.Promotion;
import Backend.repository.PromotionRepository;
import Backend.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.sql.*;
import java.util.*;

@RestController
@RequestMapping("/promotions")
public class promotionController {

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private FileService fileService;

    @PostMapping
    public @ResponseBody ResponseEntity<Promotion> savePromotion(@ModelAttribute PromotionDTO promotionDTO) throws IOException, SQLException {
        fileService = new FileService();
        Promotion promotion = promotionDTO.mappedPromotion();
        if(promotionDTO.getImageFile() != null){
            fileService.copyFileFromMultiFile(promotionDTO.getImageFile());
            promotion.setImageName(fileService.getNameFile());
        }else{
            promotion.setImageName("empty");
        }
        promotionRepository.save(promotion);
        return new ResponseEntity<>(promotion, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Promotion>>  getAllPromotions(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "sortField", defaultValue = "id") String sortField,
            @RequestParam(value = "sortOrder", defaultValue = "ASC") String sortOrder
    ) throws SQLException {
        Sort.Direction direction = sortOrder.equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortField));
        Page<Promotion> promotionPage = promotionRepository.findAll(pageable);
        return (ResponseEntity<Page<Promotion>>) ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("application/json"))
                .body(promotionPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Promotion> getOnePromotion(@PathVariable Long id) throws SQLException, IOException {
        Promotion promotion = promotionRepository.findById(id).orElse(null);
        return ResponseEntity
                .ok()
                .body(promotion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Promotion> updatePromotion(@ModelAttribute PromotionDTO updatePromotionDTO) {
        Promotion promotion = updatePromotionDTO.mappedPromotion();
        if(updatePromotionDTO.getImageFile() != null){
            fileService = new FileService();
            fileService.copyFileFromMultiFile(updatePromotionDTO.getImageFile());
            promotion.setImageName(fileService.getNameFile());
        } else if (updatePromotionDTO.getImageName() != null) {
            promotion.setImageName(updatePromotionDTO.getImageName());
        }else{
            promotion.setImageName("empty");
        }
        promotionRepository.updatePromotion(promotion);
        return ResponseEntity.status(HttpStatus.OK).body(promotion);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePromotion(@PathVariable Long id) {
        promotionRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*for fetch*/
    @GetMapping("/all")
    public List<Promotion> getAll(){
        return promotionRepository.findAllReverse();
    }
}