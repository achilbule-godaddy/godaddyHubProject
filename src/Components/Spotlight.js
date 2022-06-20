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
    <div class="section-row spot-light-row">
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
              <a href="#" class="btn btn-white">
                Get Your .{spotlightData.tld_name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
