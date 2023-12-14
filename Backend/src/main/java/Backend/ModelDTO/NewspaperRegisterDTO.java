package Backend.ModelDTO;

import Backend.model.NewspaperRegister;
import lombok.Data;

@Data
public class NewspaperRegisterDTO {
    private String email;

    public NewspaperRegister mappedNewspaperRegister(){
        NewspaperRegister newspaperRegister = new NewspaperRegister();
        newspaperRegister.setEmail(email);

        return newspaperRegister;
    }
}
