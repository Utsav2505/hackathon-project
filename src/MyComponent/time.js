import React from "react";

export default function Time(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let samay = new Date();
    let day = samay.getDay();
    let date = samay.getDate();
    let month = samay.getMonth();
    let year = samay.getFullYear();
    let timestamp = day+" "+date+" "+ months[month] +" "+year;
    return timestamp;
}