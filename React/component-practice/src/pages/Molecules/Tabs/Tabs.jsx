/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { TabsContext } from "./TabContext";

export function Tabs({ defaultSelectedTab, children }) {
  const tabPrefix = useId("tab-");
  const [selectedTab, selectTab] = useState(defaultSelectedTab);

  const contextValue = { selectTab, selectedTab, tabPrefix };

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
}
