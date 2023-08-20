// Define routes for our application react-router

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import AnalogClock from "./pages/Analog-Clock/AnalogClock";
import SearchBoxContainerDemo from "./pages/AutoSearch/SearchBoxContainer";
import GridLight from "./pages/Grid-Light/GridLight";
import InfiniteListContainer from "./pages/Infinite-List/InfiniteListContainer";
import InsertionSort from "./pages/Insertion-Sort/Insertion-Sort";
import MemoryGame from "./pages/MemoryGame/MemoryGame";
import NestedComment from "./pages/NestedComment/NestedComment";
import TableDemo from "./pages/Tables/TableDemo";
import { DemoVirtualList } from "./pages/Virtaul-List/VirtualList";
import DemoAccordian from "./pages/atoms/Accordian/Accordion";
import SliderDemo from "./pages/atoms/Slider/Slider";
import ToggleDemo from "./pages/atoms/Toggle/Toggle";

const HomeRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/table" element={<TableDemo />} exact />
        <Route path="/grid" element={<GridLight />} exact />
        <Route path="/clock" element={<AnalogClock />} exact />
        <Route path="/memory-game" element={<MemoryGame />} exact />
        <Route path="/comments" element={<NestedComment />} exact />
        <Route path="/insertion-sort" element={<InsertionSort />} exact />
        <Route path="/virtual-list" element={<DemoVirtualList />} exact />
        <Route path="/accordian" element={<DemoAccordian />} exact />
        <Route path="/slider" element={<SliderDemo />} exact />
        <Route path="/toggle" element={<ToggleDemo />} exact />
        <Route path="/search" element={<SearchBoxContainerDemo />} exact />
        <Route
          path="/infinite-list"
          element={<InfiniteListContainer />}
          exact
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default HomeRoute;
