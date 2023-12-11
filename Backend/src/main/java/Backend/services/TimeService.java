package Backend.services;

import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;

@Service
public class TimeService {
    public Long ConvertWithTimeStampToMilisTimeZone(String timestamp){
        OffsetDateTime offsetDateTime = OffsetDateTime.parse(timestamp);

        ZoneId asiaBangkokZone = ZoneId.of("Asia/Bangkok");
        OffsetDateTime offsetDateTimeZone = offsetDateTime.atZoneSameInstant(asiaBangkokZone).toOffsetDateTime();

        long timestampMilis =
                offsetDateTimeZone
                .toInstant()
                .toEpochMilli();

        return  timestampMilis;
    }

    public Date ConvertDateFromTimeStampMilis(Long timestampMilis){
        return new Date(timestampMilis);
    }

    public Date ConvertDateFromTimeStamp(String timestamp){
        return Date.valueOf(timestamp);
    }
}
