import logo from "./logo.svg";

import Tldshome from "./Components/Home/Tldshome.js";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Components/Home/Navigation";
import CategoryBox from "./Components/Categories/CategoryBox";
import "./css/style.css";
import "./css/responsive.css";
import Spotlight from "./Components/Spotlight";
import React, { Suspense } from "react";
import PurchaseDomain from "./Components/PurchaseDomain";
import PerfectDomain from "./Components/PerfectDomain";
import HomeFooter from "./Components/Footer/HomeFooter";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Navigation />
      <Tldshome />
      <CategoryBox />
      <Spotlight />
      <PurchaseDomain />
      <PerfectDomain />
      <HomeFooter />
    </Suspense>
  );
}

export default App;
