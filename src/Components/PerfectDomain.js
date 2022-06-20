import React from "react";
import SearchIcon from "./Logos/SearchIcon";

function PerfectDomain(props) {
  return (
    <div class="section-row bg-theme">
      <div class="section-row">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-10">
              <div class="tld-search-bottom text-center">
                <h2 class="mb-4">
                  A domain name just for you — one that tells your story.
                </h2>
                <div class="tld-search">
                  <form action="#">
                    <div class="tld-search-form">
                      <span class="search-ico">
                        <SearchIcon />
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Find your perfect domain"
                      />
                      <button type="submit" class="search-btn btn btn-primary">
                        <span class="search-ico">
                          <SearchIcon />
                        </span>
                        <span>Search Domains</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfectDomain;
