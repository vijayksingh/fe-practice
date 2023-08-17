// Define routes for our application react-router

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import AnalogClock from "./pages/Analog-Clock/AnalogClock";
import GridLight from "./pages/Grid-Light/GridLight";
import InsertionSort from "./pages/Insertion-Sort/Insertion-Sort";
import MemoryGame from "./pages/MemoryGame/MemoryGame";
import NestedComment from "./pages/NestedComment/NestedComment";
import TableDemo from "./pages/Tables/TableDemo";
import { DemoVirtualList } from "./pages/Virtaul-List/VirtualList";

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
      </Routes>
    </Router>
  );
};

export default HomeRoute;
