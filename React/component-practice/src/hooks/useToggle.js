import { useState } from "react";

export const useToggle = () => {
  const [status, setStatus] = useState(false);

  const toggle = () => setStatus((prev) => !prev);

  return { status, toggle };
};
