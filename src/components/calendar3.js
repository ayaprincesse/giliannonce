import React, { useState } from "react";
import DatetimeRangePicker from "react-datetime-range-picker";
import moment from "moment";
import "./calendarstyle.css"
export default function MyCalendar () {
  let now = new Date();
  let startt = moment(
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  );

  let ends = moment(startt)
    .add(1, "days")
    .subtract(1, "seconds");

  let [start, setstart] = useState(startt);
  let [end, setend] = useState(ends);

  
  let local = {
    format: "DD-MM-YYYY HH:mm",
    sundayFirst: false
  };
  
  let applyCallback = (startDate, endDate) => {
    setstart(startDate);
    setend(endDate);
  };

  let handleSelect = date => {
    console.log(date); // Momentjs object
  };
  return (
    <div className="datepickerdiv">
        <span id="startspan">Start date :</span>  
        <span id="endspan">End date :</span>
      <DatetimeRangePicker className="cldr" 
        isValidStartDate={(date) =>
        {
         return moment(date).toDate()>now && date.format("dddd") != "Sunday";}
        } 
        isValidEndDate={(date) =>
        {  return date.format("dddd") != "Sunday";}
        } />
    </div>
    
  );
}
