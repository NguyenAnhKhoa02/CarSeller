package Backend.repository;

import Backend.model.Newspaper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
public interface NewspaperRepository extends JpaRepository<Newspaper,Long> {

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE `newspaper` " +
                    "SET " +
                    "newspaper.image_name=:#{#newspaper.getImageName()}," +
                    "newspaper.title=:#{#newspaper.getTitle()}," +
                    "newspaper.content=:#{#newspaper.getContent()} " +
                    "WHERE newspaper.id = :#{#newspaper.getId()}" ,
            nativeQuery = true
    )
    void updateNewspaper(@Param("newspaper") Newspaper newspaper);
}