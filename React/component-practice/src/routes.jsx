// Define routes for our application react-router

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableDemo from "./pages/Tables/TableDemo";
import App from "./App";
import GridLight from "./pages/Grid-Light/GridLight";
import AnalogClock from "./pages/Analog-Clock/AnalogClock";
import MemoryGame from "./pages/MemoryGame/MemoryGame";
import NestedComment from "./pages/NestedComment/NestedComment";

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
      </Routes>
    </Router>
  );
};

export default HomeRoute;
