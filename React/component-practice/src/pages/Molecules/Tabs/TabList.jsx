/* eslint-disable react/prop-types */
import { useCallback, useRef } from "react";

function TabList({ ariaLabel, children }) {
  const refList = useRef(null);

  const onKeyDown = useCallback((e) => {
    const list = refList.current;
    if (!list) return;

    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    const index = tabs.indexOf(document.activeElement);

    if (index < 0) return;

    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft": {
        const next = (index - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        const next = (index + 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
    }
  }, []);
  return (
    <div
      ref={refList}
      role="tabList"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}

export default TabList;
