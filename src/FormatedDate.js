import React from "react";

export default function FormatedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes= `0${minutes}`
    }
     if (hours < 10) {
       hours = `0${hours}`;
     }
    return (
        <div>
            {day}, {hours}:{minutes}
        </div>
    );
    }
