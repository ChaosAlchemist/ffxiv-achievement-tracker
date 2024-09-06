import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrafterPage from "./pages/CrafterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crafter/:crafterCode" element={<CrafterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
