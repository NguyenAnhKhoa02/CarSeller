package Backend.ModelDTO;

import Backend.model.Promotion;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class PromotionDTO {
    private Long id;
    private String title;
    private String content;
    private String imageName;
    private MultipartFile imageFile;

    public  Promotion mappedPromotion() {
        Promotion promotion = new Promotion();
        promotion.setId(id);
        promotion.setTitle(title);
        promotion.setContent(content);
        return promotion;
    }
}
