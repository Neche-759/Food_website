import React from "react";
import "../styles/menu.css";

const apps = [
  { name: "Uber Eats", image: "/uber eat.png" },
  { name: "GRUBHUB", image: "/grubhub.png" },
  { name: "Postmates", image: "/postmates.png" },
  { name: "DOORDASH", image: "/doordash.png" },
  { name: "foodpanda", image: "/foodpanda.png" },
  { name: "deliveroo", image: "/deliveroo.png" },
  { name: "instacart", image: "/instacart.png" },
  { name: "JUST EAT", image: "/just eat.png" },
  { name: "DiDi Food", image: "/didi food.png" },
];

export default function AppsSection() {
  return (
    <div className="apps-section">
      <div className="apps-text">
        <h2>You can order<br />through apps</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
      </div>
      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            {app.logo}
            <img src={app.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
