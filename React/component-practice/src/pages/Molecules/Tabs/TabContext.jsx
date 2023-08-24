import { createContext } from "react";

export const TabsContext = createContext({
  tabsPrefix: "",
  selectedTab: null,
  selectTab: (tab) => {
    throw new Error("should not be used withour provider");
  },
});
