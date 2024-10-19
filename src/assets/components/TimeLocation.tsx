import { cityType, forecastType } from "./types";
import "./TimeLocation.css";
  type Props = {
    data: forecastType 
    cityTime: cityType
  }
  const TimeLocation = ({data,cityTime}:Props) => {
    const localTime = new Date(
      (cityTime?.dt + cityTime?.timezone) * 1000 +
        new Date().getTimezoneOffset() * 60 * 1000
    );
  return (
    <div id="timeLocationDetails" >
      {" "}
      <span>{localTime.toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        | Local Time: {localTime.toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}</span> <br></br>
      <span>
  {data?.name}{data && data.name && data.country ? ', ' : ''}{data?.country}
</span>
      
      
    </div>
  );
};

export default TimeLocation;
