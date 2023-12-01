package Backend.repository;

import Backend.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ColorResposity extends JpaRepository<Color,Long> {

    @Modifying
    @Transactional
    @Query(
            value = "INSERT INTO `color`(`color`, `url`, `car_id`) " +
                    "VALUES (?1,?2,?3)",
            nativeQuery = true
    )
    void updateColor(String color, String url, Long car_id);

    @Modifying
    @Transactional
    @Query(
            value = "DELETE FROM color WHERE color.id = ?1",
            nativeQuery = true
    )
    void deleteFromId(Long id);
}
