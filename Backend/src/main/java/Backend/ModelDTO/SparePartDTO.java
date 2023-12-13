package Backend.ModelDTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class SparePartDTO {
    private String nameSparePart;
    private MultipartFile imageFile;
}