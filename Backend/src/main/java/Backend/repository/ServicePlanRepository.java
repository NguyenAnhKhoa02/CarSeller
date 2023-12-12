package Backend.repository;

import Backend.model.ServicePlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ServicePlanRepository extends JpaRepository<ServicePlan,Long> {

    @Transactional
    @Query(
            value = "SELECT  COUNT(*)   " +
                    "FROM service_plan " +
                    "JOIN service,model "+
                    "WHERE service_plan.full_name = :fullName "+
                    "AND service.service_id = service_plan.service_id "+
                    "AND model.model_id = service_plan.model_id",
            nativeQuery = true
    )
    int checkServicePlanName(@Param("fullName") String fullName);

    @Modifying
    @Transactional
    @Query(
            value = "INSERT INTO " +
                    "`service_plan`(`address_distribution_center`, `date`, `email`, `full_name`, `license_plate`, `number_phone`, `status`, `time`, `service_id`, `model_id`) " +
                    "VALUES (:#{#servicePlan.getAddressDistributionCenter()},:#{#servicePlan.getDate()},:#{#servicePlan.getEmail()},:#{#servicePlan.getFullName()},:#{#servicePlan.getLicensePlate()},:#{#servicePlan.getNumberPhone()},:#{#servicePlan.getStatus()},:#{#servicePlan.getTime()},:serviceId,:modelId)",
            nativeQuery = true
    )
    void saveServicePlan(@Param("servicePlan") ServicePlan servicePlan,@Param("serviceId") Long serviceId,@Param("modelId") Long modelId);
}
