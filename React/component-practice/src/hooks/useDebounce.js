import { useRef } from "react";

export const useDebounce = (fn, delay) => {
  const timer = useRef(null);

  return (...args) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
