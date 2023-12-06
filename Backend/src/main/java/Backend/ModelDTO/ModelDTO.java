package Backend.ModelDTO;

import lombok.Data;
import org.springframework.core.io.InputStreamResource;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.sql.Blob;
import java.sql.SQLException;

@Data
public class ModelDTO {
    private Long id;
    private String nameModel;
    private String info;
    private MultipartFile imageFile;
    private String nameImage;
    private byte[] url;

    public ModelDTO(){

    }

    public ModelDTO(Long id, String nameModel, String info) {
        this.id = id;
        this.nameModel = nameModel;
        this.info = info;
    }


}
