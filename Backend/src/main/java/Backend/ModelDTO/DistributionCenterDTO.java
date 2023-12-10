package Backend.ModelDTO;

import Backend.model.AddressDistributionCenter;
import Backend.model.DistributionCenter;
import lombok.Data;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

@Data
public class DistributionCenterDTO {
    JSONArray addresses;
    String nameDistributionCenter;
    String hotline;

    public DistributionCenter mappedDisributionCenter(){
        DistributionCenter distributionCenter = new DistributionCenter();

        List<AddressDistributionCenter> addressDistributionCenters = new ArrayList<>();
        for (int i = 0; i < addresses.length(); i++) {
            JSONObject address = addresses.getJSONObject(i);

            AddressDistributionCenter addressDistributionCenter = new AddressDistributionCenter();
            addressDistributionCenter.setAddress(address.getString("address"));
            addressDistributionCenter.setSeller(address.getBoolean("isSeller"));
            addressDistributionCenter.setServiced(address.getBoolean("isService"));
            addressDistributionCenter.setSecondHand(address.getBoolean("isSecondHand"));
            addressDistributionCenter.setReplacementParts(address.getBoolean("isReplacementParts"));
            addressDistributionCenters.add(addressDistributionCenter);
        }

        distributionCenter.setAddressDistributionCenters(addressDistributionCenters);
        distributionCenter.setNameDistributionCenter(nameDistributionCenter);
        distributionCenter.setHotline(hotline);

        return distributionCenter;
    }
}
