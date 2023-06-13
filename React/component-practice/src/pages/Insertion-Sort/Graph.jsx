/* eslint-disable */

import React from "react";
import Bars from "./Bars";

function Graph({ arrayState, red }) {
  console.log(arrayState)
  return (
    <div className="graphContainer">
      {arrayState.map((item, index) => (
        <Bars key={`${item}-${index}`} count={item} red={index === red}/>
      ))}
    </div>
  );
}

export default Graph;
