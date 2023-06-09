import React, { useEffect } from "react";
import "./styles.css";

const getHandStyle = (type) => {
  if (type === "hour") {
    return "hour-hand";
  } else if (type === "minute") {
    return "minute-hand";
  } else if (type === "second") {
    return "second-hand";
  }
};

function Hand({ type, angle }) {
  const styleClass = getHandStyle(type);

  return (
    <div
      className={styleClass}
      style={{ transform: `translate(-10%, -100%) rotate(${angle}deg)` }}
    ></div>
  );
}

function AnalogClock() {
  const [tick, setTick] = React.useState(1);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTick((tick + 1) % 60);
    }, 1000); // ms delay

    () => clearTimeout(timer);
  }, [tick]); // dependency array

  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourAngle = hour * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  return (
    <div className="clock">
      <Hand type="hour" angle={hourAngle} />
      <Hand type="minute" angle={minuteAngle} />
      <Hand type="second" angle={secondAngle} />
    </div>
  );
}

export default AnalogClock;
