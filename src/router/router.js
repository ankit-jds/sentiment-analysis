import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppRoutes(props) {
  return (
    // <React.Suspense fallback={null}>

    <Router>
      <Routes>
        <Route exact path="/" element={<>Root Index</>} />
        <Route path="/login" element={<h1>/login</h1>} />
      </Routes>
    </Router>
    // {/* </React.Suspense> */}
  );
}

export default AppRoutes;
