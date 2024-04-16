"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

function CalendarComp() {
  const localizer = dayjsLocalizer(dayjs);



  return (
    <div style={{height:"95vh",
        width:"70vw"
    }}>
      <Calendar localizer={localizer} /* style={{ width: 800, height: 700 }} */ />
    </div>
  );
}

export default CalendarComp;
