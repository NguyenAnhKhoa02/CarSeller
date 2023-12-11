package Backend.ModelDTO;

import Backend.model.DistributionCenter;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.sql.Date;

@Data
public class ShowroomAndTestingDTO {
    private Long id;
    private DistributionCenter distributionCenter;
    private Date dateBegin, dateEnd;
    private String timeWorking;
}
