package Backend.repository;

import Backend.model.TypeSparePart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TypeSparePartRepository extends JpaRepository<TypeSparePart,Long> {
    @Modifying
    @Transactional
    @Query(
            value = "UPDATE type_spare_part " +
                    "SET " +
                    "type_spare_part.name_type_spare_part = :#{#typeSparePart.getNameTypeSparePart()} " +
                    "WHERE type_spare_part.id = :#{#typeSparePart.getId()}",
            nativeQuery = true
    )
    void updateTypeAccessory(@Param("typeSparePart") TypeSparePart typeSparePart);
}