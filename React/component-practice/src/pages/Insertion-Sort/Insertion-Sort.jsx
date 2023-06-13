/* eslint-disable */
import React, { useState } from "react";
import Graph from "./Graph";

const generateInsertionSortStore = (numbers) => {
  const store = [];

  // shape of each step {data, i , j}

  for (let i = 1; i < numbers.length; i += 1) {
    store.push({data: [...numbers], i, j : i , red : i });
    for (let j = i; j > 0; j -= 1) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j - 1];
        numbers[j - 1] = numbers[j];
        numbers[j] = temp;
        store.push({data: [...numbers], i : j-1, j, red : j-1 });
      }
    }
  }
  return store;
};

const intialState = [83, 6, 63, 84, 9, 14, 90, 24, 17];
const insertionSortStore = generateInsertionSortStore([...intialState]);

console.log(insertionSortStore);

function InsertionSort() {
  const [currentStep, setCurrentStep] = useState(0);

  const currentState = insertionSortStore[currentStep];

  const prev = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };

  const next = () => {
    if (currentStep === insertionSortStore.length - 1) return;
    setCurrentStep(currentStep + 1);
  };


  return (
    <>
      <Graph arrayState={currentState.data} red={currentState.red} />
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </>
  );
}

export default InsertionSort;

// TODO
/*
- 2nd Phase
 - Generate a store which contians all the steps for insertion sort
 - have a prev, next method which can iterate over the store 

- Animate the state changes
  - Find the diff between two state ? 
  - 

*/
