package Backend.ModelDTO;

import Backend.model.AddressDistributionCenter;
import Backend.model.DistributionCenter;
import Backend.model.ShowroomAndTesting;
import Backend.services.TimeService;
import lombok.Data;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
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
    List<ShowroomAndTesting> showroomAndTestings;

    @Autowired
    TimeService timeService;

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
        timeService = new TimeService();

        existedAddresses = new ArrayList<>();
        newAddresses = new ArrayList<>();
        showroomAndTestings = new ArrayList<>();

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
                for (int j = 0; j < address.getJSONArray("showroomAndTestings").length(); j++) {
                    JSONObject showroomAndTestingJSON = (JSONObject) address.getJSONArray("showroomAndTestings").get(j);

                    ShowroomAndTesting showroomAndTesting = new ShowroomAndTesting();
                    showroomAndTesting.setId(addressDistributionCenter.getId());

                    if(showroomAndTestingJSON.get("date") instanceof Long)
                        showroomAndTesting.setDate(timeService.ConvertDateFromTimeStampMilis(showroomAndTestingJSON.getLong("date")));
                    else
                        showroomAndTesting.setDate(timeService.ConvertDateFromTimeStamp(showroomAndTestingJSON.getString("date")));

                    if(showroomAndTestingJSON.get("begin") instanceof Long)
                        showroomAndTesting.setBegin(showroomAndTestingJSON.getLong("begin"));
                    else if (showroomAndTestingJSON.get("begin") instanceof Integer);
                    else
                        showroomAndTesting.setBegin(timeService.ConvertWithTimeStampToMilisTimeZone(showroomAndTestingJSON.getString("begin")));

                    if(showroomAndTestingJSON.get("end") instanceof Long)
                        showroomAndTesting.setEnd(showroomAndTestingJSON.getLong("end"));
                    else if (showroomAndTestingJSON.get("end") instanceof Integer);
                    else
                        showroomAndTesting.setEnd(timeService.ConvertWithTimeStampToMilisTimeZone(showroomAndTestingJSON.getString("end")));

                    showroomAndTestings.add(showroomAndTesting);
                }
                existedAddresses.add(addressDistributionCenter);
            }else{
                newAddresses.add(addressDistributionCenter);
            }
        }
        System.out.println(showroomAndTestings);
        distributionCenter.setNameDistributionCenter(nameDistributionCenter);
        distributionCenter.setHotline(hotline);

        return distributionCenter;
    }
}
