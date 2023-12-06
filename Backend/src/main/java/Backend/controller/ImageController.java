package Backend.controller;

import Backend.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.Arrays;
import java.util.Base64;

@RestController
@RequestMapping("/image")
public class ImageController {
    @Autowired
    FileService fileService;
    @GetMapping("/{nameImage}")
    public ResponseEntity<byte[]> getImage(@PathVariable String nameImage) throws IOException {
        fileService = new FileService();

        File file = fileService.createFile(nameImage);
        InputStream inputStream = new FileInputStream(file);
        byte[] imageBytes = inputStream.readAllBytes();

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_PNG)
                .contentType(MediaType.IMAGE_JPEG)
                .body(imageBytes);
    }
}
