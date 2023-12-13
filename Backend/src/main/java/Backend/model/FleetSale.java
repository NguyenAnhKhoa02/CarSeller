package Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FleetSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long modelId;

    private String fullName;
    private String email;
    private String phoneNumber;
    private String  companyAddress;
    private String  companyPhone;
    private String  contactName;
    private String  quantity;
    private String status;
}
