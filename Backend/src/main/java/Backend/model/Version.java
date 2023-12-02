package Backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Version {
    @Id
    @Column(
            name = "versionId"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public void setNameVersion(String nameVersion) {
        this.nameVersion = nameVersion;
    }

    public void setNumCarSeat(int numCarSeat) {this.numCarSeat = numCarSeat;}

    public void setInfo(String info) {
        this.info = info;
    }

    public void setGasCap(String gasCap) {
        this.gasCap = gasCap;
    }

    public void setFrontBrakes(String frontBrakes) {
        this.frontBrakes = frontBrakes;
    }

    public void setRearBrakes(String rearBrakes) {
        this.rearBrakes = rearBrakes;
    }

    public void setFrontFogLight(String frontFogLight) {
        this.frontFogLight = frontFogLight;
    }

    public void setDoorHandle(String doorHandle) {
        this.doorHandle = doorHandle;
    }

    public void setWiperBlade(String wiperBlade) {
        this.wiperBlade = wiperBlade;
    }

    public void setWrappedSteeringWheelAndGearLever(String wrappedSteeringWheelAndGearLever) {
        this.wrappedSteeringWheelAndGearLever = wrappedSteeringWheelAndGearLever;
    }

    public void setSeatMaterial(String seatMaterial) {
        this.seatMaterial = seatMaterial;
    }

    public void setAirBag(String airBag) {
        this.airBag = airBag;
    }

    public void setBackCamera(String backCamera) {
        this.backCamera = backCamera;
    }

    public void setAntiTheft(String antiTheft) {
        this.antiTheft = antiTheft;
    }

    public void setAutoLock(String autoLock) {
        this.autoLock = autoLock;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Getter
    private String nameVersion;
    private Long modelId;
    @OneToMany
    private List<Color> colors;
    @Getter
    private int numCarSeat;
    @Getter
    private String info;
    @Getter
    private String gasCap;
    @Getter
    private String frontBrakes;
    @Getter
    private String rearBrakes;
    @Getter
    private String frontFogLight;
    @Getter
    private String doorHandle;
    @Getter
    private String wiperBlade;
    @Getter
    @Column(
            name = "wSWandGL"
    )
    private String wrappedSteeringWheelAndGearLever;
    @Getter
    private String seatMaterial;
    @Getter
    private String airBag;
    @Getter
    private String backCamera;
    @Getter
    private String antiTheft;
    @Getter
    private String autoLock;
    @Getter
    private int price;
}