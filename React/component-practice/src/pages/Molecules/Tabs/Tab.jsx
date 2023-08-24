/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TabsContext } from "./TabContext";
import "./styles.css";
function Tab({ tab, children }) {
  const { selectedTab, selectTab, tabPrefix } = useContext(TabsContext);
  const style = { fontWeight: selectedTab === tab ? "bold" : "normal" };

  return (
    <button
      role="tab"
      className="tab-button"
      aria-selected={selectTab === tab}
      aria-controls={`tab-${tabPrefix}-tabPanel-${tab}`}
      onClick={() => selectTab(tab)}
      tabIndex={selectedTab === tab ? 0 : -1}
      style={style}
    >
      {children}
    </button>
  );
}

export default Tab;
