/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TabsContext } from "./TabContext";

function TabPanel({ tab, children }) {
  const { selectedTab, tabPrefix } = useContext(TabsContext);

  if (selectedTab !== tab) return null;
  [];
  return (
    <div role="tabPanel" tabIndex={0} id={`tab-${tabPrefix}-tabPanel-${tab}`}>
      {children}
    </div>
  );
}

export default TabPanel;
