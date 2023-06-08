// Define routes for our application react-router

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableDemo from "./pages/Tables/TableDemo";
import App from "./App";
import GridLight from "./pages/Grid-Light/GridLight";

const HomeRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/table" element={<TableDemo />} exact />
        <Route path="/grid" element={<GridLight />} exact />
      </Routes>
    </Router>
  );
};

export default HomeRoute;
