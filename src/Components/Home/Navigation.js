import React from "react";
import GoDaddyLogo from "../Logos/GoDaddyLogo";
import menuBar from "../../Constants/menuData.js";
import NavArrowLogo from "../Logos/NavArrowLogo";

function Navigation(props) {
  return (
    <header id="header">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="logo">
            <a href="#">
              <GoDaddyLogo />
            </a>
          </div>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#headerMenu"
            aria-controls="headerMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="menu-lines"></span>
          </button>
          <div class="header-menu">
            <div class="collapse navbar-collapse" id="headerMenu">
              <ul class="navbar-nav">
                {menuBar.map((menuBar) => (
                  <li className="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      {menuBar}
                      <NavArrowLogo />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
