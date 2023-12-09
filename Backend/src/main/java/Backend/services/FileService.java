package Backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class FileService {
    private String pathFile;

    private String pathSavedFile;
    private String path = "C:/CarSeller/Frontend/src/Components/Assets/";
    public FileService(){
        /*check C:/CarSeller is exists
        * if not: create
        * */

        File fileCarSeller = new File(path);
        if(!fileCarSeller.exists())
            fileCarSeller.mkdir();

        pathFile = fileCarSeller.getPath() + "\\";
    };

    public void copyFileFromMultiFile(MultipartFile multipartFile){
        try {
            File fileToSave = new File(pathFile + multipartFile.getOriginalFilename());
            pathSavedFile = fileToSave.getName();
            multipartFile.transferTo(fileToSave);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public String getNameFile(){

        if(pathSavedFile == null){
            System.out.println("NO FILE WAS COPIED");
            return null;
        }

        return pathSavedFile;
    }

    public File createFile(String nameImage){
        return new File(path + nameImage);
    }
}
