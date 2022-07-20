import React from 'react'

const TimerApp = () => {

const newYear =  "1 Jan 2023";
const day = new Date(newYear);
console.log(day, "day");
const currentdate = new Date();
  console.log(currentdate, "currentdate");
  const daysLeft = (day - currentdate) / 1000;
  console.log(daysLeft, "daysLeft");

  const days = Math.floor(daysLeft);
  console.log(days, "days")
   const Days = Math.floor(days / 3600 / 24);
   console.log(Days, "Days");
   const hours = Math.floor(days / 3600);
   console.log(hours, "hours")
   const minutes = Math.floor(days / 60) % 60;
   console.log(minutes, "minutes")
   const seconds = Math.floor(days);
   console.log(seconds, "seconds")

   const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
const mon = d.getMonth();
console.log(mon, "mon")
let month = months[d.getMonth()];
console.log(month, "months");
  return (
    <>
        <div className="container"> 
        <h1 className="container">  {Days}Days   {hours}Hours  {minutes}Minutes {seconds}Seconds </h1>
        </div>
    </>
  )
}

export default TimerApp