import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSpotlightInfo } from "../Services/api";

function Spotlight(props) {
  var [spotlightData, setSpotlightData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let spotdata = await getSpotlightInfo();
      setSpotlightData(spotdata);
    };
    fetchData();
  }, []);
  const capitalLetter = (string) => {
    return string.toUpperCase();
  };
  return (
    <div class="section-row spot-light-row d-md-flex align-items-center">
      <div
        class="bg-img d-none d-md-block"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${spotlightData.tld_bgimage}`,
        }}
      ></div>
      <div
        class="bg-img d-block d-md-none"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${spotlightData.tld_bgimage_mobile})`,
        }}
      ></div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-xl-4 col-lg-5 col-md-6">
            <div class="spot-light-box">
              <h5>Spotlight</h5>
              <h3>
                .
                {spotlightData.tld_name &&
                  capitalLetter(spotlightData.tld_name)}
              </h3>
              <p>{spotlightData.tld_spotlight_desc}</p>
              <a href="#" class="btn btn-secondary">
                <span>Get Your .{spotlightData.tld_name}<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0853 0.5L13 1.60097L17.0407 5.7H0V7.3H17.0407L13 11.399L14.0853 12.5L20 6.5L14.0853 0.5Z"/></svg></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
