import React from "react";
import "../styles/menu.css";

export default function Menufooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col logo-col">
          <img style={{position:"relative", bottom:"9.6rem", right:"2rem"}} src="/footer Logo.png" />
          <p>
            In the new era of technology we look in the future with certainty and pride to
            for our company and.
          </p>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h3>Pages</h3>
          <ul className="footer-home">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="footer-col">
          <h3>Utility Pages</h3>
          <ul className="footer-link">
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>

        {/* Instagram Section */}
        <div className="footer-col insta-col">
          <h3>Follow Us On Instagram</h3>
          <div className="insta-images">
            <img src="/footer noodles.png" alt="img1" />
            <img src="/footer fries.png" alt="img2" />
            <img src="/footer meat.png" alt="img3" />
            <img src="/footer pie.png" alt="img4" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  );
}
