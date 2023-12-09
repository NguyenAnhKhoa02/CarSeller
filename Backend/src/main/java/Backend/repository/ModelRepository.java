package Backend.repository;

import Backend.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ModelRepository extends JpaRepository<Model,Long> {

    @Query(
            value = "SELECT COUNT(*) = 1 " +
                    "FROM model " +
                    "WHERE model.name_model = :nameModel",
            nativeQuery = true
    )
    int checkNameModel(@Param("nameModel") String nameModel);

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE `model` " +
                    "SET " +
                    "model.image_name=:#{#model.getImageName()}," +
                    "model.info=:#{#model.getInfo()}," +
                    "model.name_model=:#{#model.getNameModel()}, " +
                    "model.fuel = :#{#model.getFuel()} " +
                    "WHERE model.id = :#{#model.getId()}" ,
            nativeQuery = true
    )
    void updateModel(@Param("model") Model model);
}
