import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import { Tabs } from "./Tabs";

export const TabDemo = () => {
  return (
    <Tabs defaultSelectedTab="tab1">
      <TabList ariaLabel="My tabs">
        <Tab tab="tab1">Tab 1</Tab>
        <Tab tab="tab2">Tab 2</Tab>
        <Tab tab="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel tab="tab1">Tab 1 content</TabPanel>
      <TabPanel tab="tab2">Tab 2 content</TabPanel>
      <TabPanel tab="tab3">Tab 3 content</TabPanel>
    </Tabs>
  );
};
