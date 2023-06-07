// Define routes for our application react-router

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableDemo from "./pages/Tables/TableDemo";
import App from "./App";

const HomeRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/table" element={<TableDemo />} exact />
      </Routes>
    </Router>
  );
};

export default HomeRoute;
