package Backend.ModelDTO;

import Backend.model.Model;
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
    private int numCarSeat;
    private String fuel;
    private String imageName;

    public Model mappedModel(){
        Model model = new Model();
        model.setId(id);
        model.setNameModel(nameModel);
        model.setInfo(info);
        model.setNumCarSeat(numCarSeat);
        model.setFuel(fuel);

        return model;
    }
}
