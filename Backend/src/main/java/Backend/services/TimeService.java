package Backend.services;

import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.time.*;
import java.time.format.DateTimeFormatter;

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

        public long TimeToTimestamp (String timeStamp){
            System.out.println(timeStamp);
                DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");

                LocalTime time = LocalTime.parse(timeStamp, timeFormatter);

                // Assuming you want to set the date to today
                LocalDateTime todayDateTime = LocalDateTime.of(LocalDate.now(), time);

                // Convert LocalDateTime to Date
                java.util.Date date = java.util.Date.from(todayDateTime.atZone(ZoneId.systemDefault()).toInstant());


            return date.getTime();
        }

    public Date ConvertDateFromTimeStampMilis(Long timestampMilis){
        return new Date(timestampMilis);
    }

    public Date ConvertDateFromTimeStamp(String timestamp){
        return Date.valueOf(timestamp);
    }
}
