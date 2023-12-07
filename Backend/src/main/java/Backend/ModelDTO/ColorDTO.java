package Backend.ModelDTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ColorDTO {
    private String color;
    private MultipartFile imageFile;
}
