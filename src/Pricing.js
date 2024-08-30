import React from "react"
import ReactDOM from "react-dom"
function PricingPanel() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-header bg-primary text-white">
                            Basic Plan
                        </div>
                        <div className="card-body">
                            <div className="card-title">$9.99/month</div>
                            <div className="card-text">Perfect for individuals</div>
                            <ul className="list-unstyled">
                                <li>✔ 5 Projects</li>
                                <li>✔ 10GB Storage</li>
                                <li>✔ Basic Support</li>
                            </ul>
                            <button className="btn btn-primary mt-3">Choose Plan</button>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-header bg-success text-white">
                            Pro Plan
                        </div>
                        <div className="card-body">
                            <div className="card-title">$19.99/month</div>
                            <div className="card-text">Ideal for professionals</div>
                            <ul className="list-unstyled">
                                <li>✔ 20 Projects</li>
                                <li>✔ 100GB Storage</li>
                                <li>✔ Priority Support</li>
                            </ul>
                            <button className="btn btn-success mt-3">Choose Plan</button>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-header bg-warning text-white">
                            Enterprise Plan
                        </div>
                        <div className="card-body">
                            <div className="card-title">$49.99/month</div>
                            <div className="card-text">For large organizations with advanced needs</div>
                            <ul className="list-unstyled">
                                <li>✔ Unlimited Projects</li>
                                <li>✔ 1TB Storage</li>
                                <li>✔ Dedicated Support</li>
                            </ul>
                            <button className="btn btn-warning mt-3">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;