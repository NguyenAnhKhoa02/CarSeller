package Backend.repository;

import Backend.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
public interface PromotionRepository extends JpaRepository<Promotion,Long> {

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE `promotion` " +
                    "SET " +
                    "promotion.image_name=:#{#promotion.getImageName()}," +
                    "promotion.title=:#{#promotion.getTitle()}," +
                    "promotion.content=:#{#promotion.getContent()}, " +
                    "WHERE promotion.id = :#{#promotion.getId()}" ,
            nativeQuery = true
    )
    void updatePromotion(@Param("promotion") Promotion promotion);
}