import React from "react";
import fmenu from "../../Constants/fmenu";

function BottomFooter(props) {
  var menuItems = [...fmenu];
  return (
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mb-md-3 d-none d-md-block">
            <div class="copyright-box">
              <p>
                Copyright &copy; 2022 Registry Services, LLC. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div class="col-md-7 mb-md-3">
            <div class="fmenu-box">
              <ul>
                {menuItems.map((menuItem) => {
                  return (
                    <li>
                      <a href="#">{menuItem}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div class="col-md-6 d-md-none">
            <div class="personal-information-box">
              <p>Do not sell my personal information</p>
            </div>
          </div>
          <div class="col-md-5 mb-md-3 d-md-none">
            <div class="copyright-box">
              <p>
                Copyright &copy; 2022 Registry Services, LLC. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div class="col-md-8">
            <div class="fnote-box">
              <p>
                Use of this Site is subject to express terms of use. By using
                this site, you signify that you agree to be bounted by these
                Universal Terms of Service.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <div class="personal-information-box">
              <p>Do not sell my personal information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
