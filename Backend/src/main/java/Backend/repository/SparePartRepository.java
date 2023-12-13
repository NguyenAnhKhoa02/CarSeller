package Backend.repository;

import Backend.model.SparePart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface SparePartRepository extends JpaRepository<SparePart,Long> {
    @Modifying
    @Transactional
    @Query(
            value = "DELETE FROM `spare_part` WHERE spare_part.id_type_spare_part = :idTypeSparePart",
            nativeQuery = true
    )
    void deleteAllSparePart(@Param("idTypeSparePart") Long idTypeSparePart);

    @Modifying
    @Transactional
    @Query(
            value = "INSERT INTO `spare_part`(`name_spare_part`, `image_name`, `id_type_spare_part`) \n" +
                    "VALUES (:#{#sparePart.getNameSparePart()},:#{#sparePart.getImageName()},:idTypeSparePart)",
            nativeQuery = true
    )
    void saveSparePart(@Param("sparePart") SparePart sparePart, @Param("idTypeSparePart") Long idTypeSparePart);
}