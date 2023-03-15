import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";

function App() {
  return (
    <>
      <div className="bg-[#fafbfc]">
        <Router>
          <Routes>
            <Route path="/" element={<MarketPlace />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
