import React from "react";
import purchaseOption from "../Constants/purchaseOptions";
function PurchaseDomain(props) {
  return (
    <div class="section-row">
      <div class="container">
        <div class="row">
          <div class="col-md-4 ">
            <div class="section-title">
              <h3>How to secure your domain.</h3>
              <p>
                After you find your next domain, choose from our trusted retail
                partners. We’ll take you to their site to complete your
                purchase.
              </p>
              <div class="mt-3">
                <a href="#" class="btn btn-primary">
                  <span>See All Options<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0853 0.5L13 1.60097L17.0407 5.7H0V7.3H17.0407L13 11.399L14.0853 12.5L20 6.5L14.0853 0.5Z"/></svg></span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <div class="purchase-domain-logo-list">
              <div class="row">
                {purchaseOption.map((category) => {
                  return (
                    <div class="col-6">
                      <div class="purchase-domain-logo">
                        <figure>
                          <img src="images/purchase-domain-logo.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDomain;

