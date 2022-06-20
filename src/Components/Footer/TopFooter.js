import React from "react";
import GoDaddyLogo from "../Logos/GoDaddyLogo";
import TwitterLogo from "../Logos/TwitterLogo";

function TopFooter(props) {
  return (
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col">
            <div class="flogo">
              <GoDaddyLogo />
            </div>
          </div>
          <div class="col-md-6 col">
            <div class="f-social d-flex mt-0 justify-content-end">
              {" "}
              <a href="#">
                <TwitterLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
