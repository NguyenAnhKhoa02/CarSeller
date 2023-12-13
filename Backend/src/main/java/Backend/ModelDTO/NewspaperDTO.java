package Backend.ModelDTO;

import Backend.model.Newspaper;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class NewspaperDTO {
    private Long id;
    private String title;
    private String content;
    private String imageName;
    private MultipartFile imageFile;

    public Newspaper mappedNewspaper() {
        Newspaper newspaper = new Newspaper();
        newspaper.setId(id);
        newspaper.setTitle(title);
        newspaper.setContent(content);
        return newspaper;
    }
}