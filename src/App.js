import logo from "./logo.svg";

import Tldshome from "./Components/Home/Tldshome.js";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/style.css";
import "./css/responsive.css";
import Spotlight from "./Components/Spotlight";
import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
