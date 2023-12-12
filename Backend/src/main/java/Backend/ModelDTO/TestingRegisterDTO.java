package Backend.ModelDTO;

import Backend.model.AddressDistributionCenter;
import Backend.model.DistributionCenter;
import Backend.model.TestingRegister;
import Backend.model.Version;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.json.JSONObject;

@Data
public class TestingRegisterDTO {
    private Long id;
    private String fullName;
    private String email;
    private String numberPhone;
    private String carPD;
    private String status;
    private Long versionId;
    private Long distributionCenterId;

    public TestingRegister mappedTestingRegister(){
        TestingRegister testingRegister = new TestingRegister();
        testingRegister.setFullName(fullName);
        testingRegister.setEmail(email);
        testingRegister.setCarPD(carPD);
        testingRegister.setNumberPhone(numberPhone);
        testingRegister.setStatus("Waiting");

        return testingRegister;
    }
}
