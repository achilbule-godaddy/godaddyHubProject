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
                  See all options
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
