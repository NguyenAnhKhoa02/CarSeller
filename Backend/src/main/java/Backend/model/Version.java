package Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(
            cascade = CascadeType.ALL,
            targetEntity = Color.class
    )
    @JoinColumn(
            name = "fk_version_color",
            referencedColumnName = "id"
    )
    private List<Color> colors;
    @Column(name = "modelId",nullable = false)
    private Long modelId;
    public Long getModelId() {
        return modelId;
    }
    public void setModelId(Long modelId) {
        this.modelId = modelId;
    }
    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "modelId",
            nullable = false,
            insertable = false,
            updatable = false
    )
    @JsonIgnore
    private Model versionModels;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "versions"
    )
    private List<TestingRegister> testingRegisters;
    @Column(nullable = false)
    private String nameVersion;
    @Column(nullable = false)
    private String info;
    private String gasCap;
    private String frontBrakes;
    private String rearBrakes;
    private String frontFogLight;
    private String doorHandle;
    private String wiperBlade;
    @Column(
            name = "wswandgl"
    )
    private String wrappedSteeringWheelAndGearLever;
    private String seatMaterial;
    private String airBag;
    private String backCamera;
    private String antiTheft;
    private String autoLock;
    @Column(nullable = false)
    private int price;
    public String getNameVersion() { return nameVersion; }
    public String getInfo() { return info; }
    public String getGasCap() { return gasCap; }
    public String getFrontBrakes() { return frontBrakes; }
    public String getRearBrakes() { return rearBrakes; }
    public String getFrontFogLight() { return frontFogLight; }
    public String getDoorHandle() { return doorHandle; }
    public String getWiperBlade() { return wiperBlade; }
    public String getWrappedSteeringWheelAndGearLever() {
        return wrappedSteeringWheelAndGearLever;
    }
    public String getSeatMaterial() { return seatMaterial; }
    public String getAirBag() { return airBag; }
    public String getBackCamera() { return backCamera; }
    public String getAntiTheft() { return antiTheft; }
    public String getAutoLock() { return autoLock; }
    public int getPrice() { return price; }
    public void setNameVersion(String nameVersion) {
        this.nameVersion = nameVersion;
    }
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
}