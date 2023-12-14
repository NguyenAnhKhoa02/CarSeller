package Backend.ModelDTO;

import Backend.model.Color;
import Backend.model.Model;
import Backend.model.TestingRegister;
import jakarta.persistence.*;
import lombok.Data;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

import Backend.model.Version;

@Data
public class VersionDTO {
    private Long id;
    private List<MultipartFile> colorFiles;
    private List<JSONObject> colors;
    private Long modelId;
    private Model versionModels;
    private List<TestingRegister> testingRegisters;
    private String nameVersion;
    private int numCarSeat;
    private String info;
    private String gasCap;
    private String frontBrakes;
    private String rearBrakes;
    private String frontFogLight;
    private String doorHandle;
    private String wiperBlade;
    private String wrappedSteeringWheelAndGearLever;
    private String seatMaterial;
    private String airBag;
    private String backCamera;
    private String antiTheft;
    private String autoLock;
    private String fuel;
    private Long price;

    public Version mappedVersion(){
        Backend.model.Version version = new Backend.model.Version();
        version.setId(id);
        version.setAirBag(airBag);
        version.setAntiTheft(antiTheft);
        version.setAutoLock(autoLock);
        version.setBackCamera(backCamera);
        version.setDoorHandle(doorHandle);
        version.setFrontBrakes(frontBrakes);
        version.setFrontFogLight(frontFogLight);
        version.setGasCap(gasCap);
        version.setInfo(info);
        version.setModelId(modelId);
        version.setNameVersion(nameVersion);
        version.setPrice(price);
        version.setRearBrakes(rearBrakes);
        version.setSeatMaterial(seatMaterial);
        version.setWiperBlade(wiperBlade);
        version.setWrappedSteeringWheelAndGearLever(wrappedSteeringWheelAndGearLever);
        return version;
    }
}