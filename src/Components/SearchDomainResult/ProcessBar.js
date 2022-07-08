import React from 'react';
import CheckedinLogo from '../Logos/CheckedinLogo';

function ProcessBar(props) {
    return (
        
    <div className="pt-md-3 pb-md-0 py-2">
    <div className="container">
        <div className="small-container">
            <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="domain-process-step step-complete">
                        <div className="d-flex align-items-center mb-md-2">
                            <h4 className="m-md-0">Search</h4>
                            <figure className="process-check">
                                <CheckedinLogo/>
                            </figure>
                        </div>
                        <p className="font-l">Search for your preferred domain name.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="domain-process-step">
                        <div className="d-flex align-items-center mb-md-2">
                            <h4 className="m-md-0">Select a Domain</h4>
                            <figure className="process-check">
                            <CheckedinLogo/>
                            </figure>
                        </div>
                        <p className="font-l">Confirm the availability of your domain.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="domain-process-step">
                        <div className="d-flex align-items-center mb-md-2">
                            <h4 className="m-md-0">Complete Your Purchase</h4>
                            <figure className="process-check">
                            <CheckedinLogo/>
                            </figure>
                        </div>
                        <p className="font-l">Buy your domain from one of our retail partners.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}

export default ProcessBar;