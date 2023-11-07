package carSeller.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private  String name;
    private  String brand;
    private String fashion;
    private int numCarSeat;
    private int price;
    private String fuel;
    private int gearbox;

    public Car() {
    }

    public Car(int id, String name, String brand, String fashion, int numCarSeat, int price, String fuel, int gearbox) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.fashion = fashion;
        this.numCarSeat = numCarSeat;
        this.price = price;
        this.fuel = fuel;
        this.gearbox = gearbox;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getFashion() {
        return fashion;
    }

    public void setFashion(String fashion) {
        this.fashion = fashion;
    }

    public int getNumCarSeat() {
        return numCarSeat;
    }

    public void setNumCarSeat(int numCarSeat) {
        this.numCarSeat = numCarSeat;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public int getGearbox() {
        return gearbox;
    }

    public void setGearbox(int gearbox) {
        this.gearbox = gearbox;
    }
}
