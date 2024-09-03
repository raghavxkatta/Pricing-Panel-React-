import React from "react";
import "./PricingPlan.css";


function PricingPlan() {
    return (
        <div>
      
            <div className="box">
                <h2>Pricing Plans</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Plan</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Features</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic Plan</td>
                            <td>$9.99/month</td>
                            <td>Perfect for individuals</td>
                            <td>
                                <ul>
                                    <li>✔ 5 Projects</li>
                                    <li>✔ 10GB Storage</li>
                                    <li>✔ Basic Support</li>
                                </ul>
                            </td>
                            <td>
                                <button className="btn btn-primary">Choose Plan</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pro Plan</td>
                            <td>$19.99/month</td>
                            <td>Ideal for professionals</td>
                            <td>
                                <ul>
                                    <li>✔ 20 Projects</li>
                                    <li>✔ 100GB Storage</li>
                                    <li>✔ Priority Support</li>
                                </ul>
                            </td>
                            <td>
                                <button className="btn btn-success">Choose Plan</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Enterprise Plan</td>
                            <td>$49.99/month</td>
                            <td>For large organizations with advanced needs</td>
                            <td>
                                <ul>
                                    <li>✔ Unlimited Projects</li>
                                    <li>✔ 1TB Storage</li>
                                    <li>✔ Dedicated Support</li>
                                </ul>
                            </td>
                            <td>
                                <button className="btn btn-warning">Choose Plan</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
          
        </div>
    );
}

export default PricingPlan;
