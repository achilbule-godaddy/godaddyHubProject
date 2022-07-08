import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/style.css";
import "./css/responsive.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DomainSearch from "./Components/DomainSearch/DomainSearch";
import SearchDomainResult from "./Components/SearchDomainResult/SearchDomainResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domainresult" element={<DomainSearch />} />
        <Route path="/searchresult" element={<SearchDomainResult/>} />
      </Routes>
    </Router>
  );
}

export default App;
