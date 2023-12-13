package Backend.repository;

import Backend.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ColorRepository extends JpaRepository<Color,Long> {
    @Modifying
    @Transactional
    @Query(
            value = "DELETE FROM `color` WHERE color.fk_version_color = :idVersion",
            nativeQuery = true
    )
    void deleteAllColor(@Param("idVersion") Long idVersion);

    @Modifying
    @Transactional
    @Query(
            value = "INSERT INTO `color`(`color`, `image_name`, `fk_version_color`) \n" +
                    "VALUES (:#{#color.getColor()},:#{#color.getImageName()},:idVersion)",
            nativeQuery = true
    )
    void saveColor(@Param("color")Color color, @Param("idVersion") Long idVersion);
}