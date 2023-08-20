import { useId } from "react";
import "./styles.css";
/* eslint-disable */

import React, { useState } from "react";

function Slider({ label, min, max, value, onChange, ...rest }) {
  const id = useId();
  return (
    <div className="wrapper">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        type="range"
        className="slider"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

function SliderDemo() {
  const [value, setValue] = useState(10);
  return (
    <Slider
      label="Slider"
      min={0}
      max={100}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SliderDemo;
