package Backend.repository;

import Backend.model.Version;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface VersionRepository extends JpaRepository<Version,Long> {

    @Query(
           value = "SELECT version.* " +
                   "FROM version " +
                   "JOIN model " +
                   "WHERE model.name_model = :nameModel and version.model_id = model.model_id",
            nativeQuery = true
    )
    public List<Version> getAllVersionsFromModelName(@Param("nameModel") String modelName);

    @Query(
            value = "SELECT version.* " +
                    "FROM version " +
                    "JOIN model " +
                    "WHERE version.name_version = :version and model.name_model = :model",
            nativeQuery = true
    )
    Version getVersionByModelAndNameVersion(@Param("model") String model, @Param("version") String version);

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE version, car " +
                    "SET " +
                    "version.name_version = :#{#version.getNameVersion()}, " +
                    "version.model_id = :#{#version.getModelId()}, " +
                    "car.air_bag = :#{#version.getCar().getAirBag()}, " +
                    "car.anti_theft = :#{#version.getCar().getAntiTheft()}, " +
                    "car.auto_lock = :#{#version.getCar().getAutoLock()}, " +
                    "car.back_camera = :#{#version.getCar().getBackCamera()}, " +
                    "car.door_handle = :#{#version.getCar().getDoorHandle()}, " +
                    "car.front_brakes = :#{#version.getCar().getFrontBrakes()}, " +
                    "car.front_fog_light = :#{#version.getCar().getFrontFogLight()}, " +
                    "car.gas_cap = :#{#version.getCar().getGasCap()}, " +
                    "car.num_car_seat = :#{#version.getCar().getNumCarSeat()}, " +
                    "car.price = :#{#version.getCar().getPrice()}, " +
                    "car.rear_brakes = :#{#version.getCar().getRearBrakes()}, " +
                    "car.seat_material = :#{#version.getCar().getSeatMaterial()}, " +
                    "car.wiper_blade = :#{#version.getCar().getWiperBlade()}, " +
                    "car.wswandgl = :#{#version.getCar().getWrappedSteeringWheelAndGearLever()} " +
                    "WHERE version.car_id = :#{#version.getCar().getCarId()} and version.version_id = :#{#version.getId()}",
            nativeQuery = true
    )
    void updateVersion(@Param("version") Version version);

    @Query(
            value = "SELECT COUNT(*) = 1 " +
                    "FROM version " +
                    "WHERE version.name_version = :nameVersion",
            nativeQuery = true
    )
    int checkVersionName(@Param("nameVersion") String nameVersion);
}
