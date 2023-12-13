package Backend.ModelDTO;

import Backend.model.FleetSale;
import lombok.Data;

@Data
public class FleetSaleDTO {
    private Long idFleetSale;
    private Long modelId;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String  companyAddress;
    private String  companyPhone;
    private String  contactName;
    private String  quantity;

    public FleetSale mappedFleetSale(){
        FleetSale fleetSale = new FleetSale();
        fleetSale.setCompanyAddress(companyAddress);
        fleetSale.setEmail(email);
        fleetSale.setFullName(fullName);
        fleetSale.setModelId(modelId);
        fleetSale.setCompanyPhone(companyPhone);
        fleetSale.setCompanyAddress(companyAddress);
        fleetSale.setContactName(contactName);
        fleetSale.setQuantity(quantity);
        fleetSale.setPhoneNumber(phoneNumber);
        fleetSale.setStatus("Waiting");

        return fleetSale;
    }
}
