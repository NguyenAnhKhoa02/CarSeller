package Backend.repository;

import Backend.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PromotionRepository extends JpaRepository<Promotion,Long> {

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE `promotion` " +
                    "SET " +
                    "promotion.image_name=:#{#promotion.getImageName()}," +
                    "promotion.title=:#{#promotion.getTitle()}," +
                    "promotion.content=:#{#promotion.getContent()} " +
                    "WHERE promotion.id = :#{#promotion.getId()}" ,
            nativeQuery = true
    )
    void updatePromotion(@Param("promotion") Promotion promotion);

    @Query(
            value = "SELECT * " +
                    "FROM promotion " +
                    "ORDER BY promotion.id DESC",
            nativeQuery = true
    )
    List<Promotion> findAllReverse();
}