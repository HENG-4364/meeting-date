import React, { useEffect, useState } from 'react';
export default function Clock() {
  // let time =new Date().toLocaleTimeString();
  // const [currentTime, setCurrentTime] = useState(time);

  // const updateTime =()=>{
  //   let time = new Date().toLocaleTimeString();
  //   setCurrentTime(time);
  // }
  // setInterval(updateTime,1000);

  const [time, setTime] = useState(new Date());
  setInterval(() => {
    setTime(new Date());
  }, 1000);
  return <div>{time.toLocaleTimeString()}</div>;
}
