package Backend.ModelDTO;

import Backend.model.TypeSparePart;
import lombok.Data;
import org.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@Data
public class TypeSparePartDTO {
    private Long id;
    private String nameTypeSparePart;
    private List<MultipartFile> sparePartFiles;
    private List<JSONObject> spareParts;

    public TypeSparePart mappedTypeAccessory(){
        TypeSparePart typeSparePart = new TypeSparePart();
        typeSparePart.setId(id);
        typeSparePart.setNameTypeSparePart(nameTypeSparePart);
        return typeSparePart;
    }
}