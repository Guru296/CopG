import React, { useState } from "react";
import "../styles/Pricing.css"; // Correct import path

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const toggleBilling = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: "$29",
      yearlyPrice: "$290",
      features: [
        "✔ Visitor Check-in/Check-out",
        "✔ Basic Employee Movement Tracking",
        "✔ Digital Visitor Badges",
        "❌ Vendor Management",
        "❌ Asset Tracking",
        "❌ Custom Approval Flows",
      ],
    },
    {
      name: "Business",
      monthlyPrice: "$59",
      yearlyPrice: "$590",
      features: [
        "✔ Visitor Check-in/Check-out",
        "✔ Employee Movement Tracking",
        "✔ Vendor & Contractor Management",
        "✔ Basic Asset Tracking",
        "✔ Automated Approval Workflows",
        "❌ Advanced Reporting & Analytics",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "$99",
      yearlyPrice: "$990",
      features: [
        "✔ All Business Plan Features",
        "✔ Advanced Security Integrations",
        "✔ Biometric & RFID Support",
        "✔ AI-driven Anomaly Detection",
        "✔ Multi-location Management",
        "✔ Priority Support & Custom SLAs",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="heading">Choose Your Plan</h1>
      <p className="subheading">Secure your premises with the best security & access management solution.</p>

      {/* Billing Toggle */}
      <div className="billing-toggle">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleBilling} />
          <span className="slider"></span>
        </label>
        <span>Yearly <span className="discount">Save 20%</span></span>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.recommended ? "recommended" : ""}`}>
            {plan.recommended && <div className="badge">Most Popular</div>}
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-price">{billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</p>
            <ul className="plan-details">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="signup-btn">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
