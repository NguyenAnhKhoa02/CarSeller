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
            value = "UPDATE version " +
                    "SET " +
                    "version.name_version = :#{#version.getNameVersion()}, " +
                    "version.air_bag = :#{#version.getAirBag()}, " +
                    "version.anti_theft = :#{#version.getAntiTheft()}, " +
                    "version.auto_lock = :#{#version.getAutoLock()}, " +
                    "version.back_camera = :#{#version.getBackCamera()}, " +
                    "version.door_handle = :#{#version.getDoorHandle()}, " +
                    "version.front_brakes = :#{#version.getFrontBrakes()}, " +
                    "version.front_fog_light = :#{#version.getFrontFogLight()}, " +
                    "version.gas_cap = :#{#version.getGasCap()}, " +
                    "version.price = :#{#version.getPrice()}, " +
                    "version.rear_brakes = :#{#version.getRearBrakes()}, " +
                    "version.seat_material = :#{#version.getSeatMaterial()}, " +
                    "version.wiper_blade = :#{#version.getWiperBlade()}, " +
                    "version.wswandgl = :#{#version.getWrappedSteeringWheelAndGearLever()}, " +
                    "version.info = :#{#version.getInfo()} " +
                    "WHERE version.id = :#{#version.getId()}",
            nativeQuery = true
    )
    void updateVersion(@Param("version") Version version);

    @Query(
            value = "SELECT * " +
                    "FROM version " +
                    "WHERE version.model_id = :modelId",
            nativeQuery = true
    )
    List<Version> findByModelId(@Param("modelId") Integer modelId);
}
