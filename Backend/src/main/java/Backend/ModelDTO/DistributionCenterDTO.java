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
    Long id;
    String hotline;

    List<AddressDistributionCenter> existedAddresses;
    List<AddressDistributionCenter> newAddresses;

    public DistributionCenter mappedDisributionCenterForCreate(){
        DistributionCenter distributionCenter = new DistributionCenter();

        List<AddressDistributionCenter> addressDistributionCenters = new ArrayList<>();
        for (int i = 0; i < addresses.length(); i++) {
            JSONObject address = addresses.getJSONObject(i);

            AddressDistributionCenter addressDistributionCenter = new AddressDistributionCenter();
            addressDistributionCenter.setAddress(address.getString("address"));
            addressDistributionCenter.setIsSeller(Boolean.toString(address.getBoolean("isSeller")));
            addressDistributionCenter.setIsService(Boolean.toString(address.getBoolean("isService")));
            addressDistributionCenter.setIsSecondHand(Boolean.toString(address.getBoolean("isSecondHand")));
            addressDistributionCenter.setIsReplacementParts(Boolean.toString(address.getBoolean("isReplacementParts")));
            addressDistributionCenters.add(addressDistributionCenter);
        }

        distributionCenter.setAddressDistributionCenters(addressDistributionCenters);
        distributionCenter.setNameDistributionCenter(nameDistributionCenter);
        distributionCenter.setHotline(hotline);

        return distributionCenter;
    }

    public DistributionCenter mappedDistributionCenterForEdit(){
        DistributionCenter distributionCenter = new DistributionCenter();
        existedAddresses = new ArrayList<>();
        newAddresses = new ArrayList<>();

        distributionCenter.setId(id);

        for (int i = 0; i < addresses.length(); i++) {
            JSONObject address = addresses.getJSONObject(i);
            boolean isId = address.has("id");

            AddressDistributionCenter addressDistributionCenter = new AddressDistributionCenter();
            addressDistributionCenter.setAddress(address.getString("address"));
            addressDistributionCenter.setIsSeller(Boolean.toString(address.getBoolean("isSeller")));
            addressDistributionCenter.setIsService(Boolean.toString(address.getBoolean("isService")));
            addressDistributionCenter.setIsSecondHand(Boolean.toString(address.getBoolean("isSecondHand")));
            addressDistributionCenter.setIsReplacementParts(Boolean.toString(address.getBoolean("isReplacementParts")));

            if(isId) {
                addressDistributionCenter.setId(address.getLong("id"));
                existedAddresses.add(addressDistributionCenter);
            }else{
                newAddresses.add(addressDistributionCenter);
            }
        }

        distributionCenter.setNameDistributionCenter(nameDistributionCenter);
        distributionCenter.setHotline(hotline);

        return distributionCenter;
    }
}
