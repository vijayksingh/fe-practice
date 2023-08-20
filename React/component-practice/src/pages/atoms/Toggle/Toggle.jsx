import { useId, useState } from "react";
import "./styles.css";
/* eslint-disable */

function Toggle({ label, checked, onClick }) {
  const id = useId();
  const ballStyle = {
    transform: checked ? "translateX(100%)" : "translateX(0)",
  };
  return (
    <div className="wrapper">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <button
        id={id}
        className="toggle"
        onClick={onClick}
        aria-checked={checked}
        type="button"
      >
        <span className="ball" style={ballStyle}></span>
      </button>
    </div>
  );
}

function ToggleDemo() {
  const [enableWifi, setEnableWifi] = useState(false);
  const [lowPowerMode, setLowPowerMode] = useState(false);
  return (
    <main>
      <Toggle
        label="Enable Wifi"
        checked={enableWifi}
        onClick={() => setEnableWifi(!enableWifi)}
      />
      <Toggle
        className="green-toggle"
        label="Low Power Mode"
        checked={lowPowerMode}
        onClick={() => setLowPowerMode(!lowPowerMode)}
      />
    </main>
  );
}

export default ToggleDemo;
