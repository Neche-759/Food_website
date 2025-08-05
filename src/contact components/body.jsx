import React from "react";
import "../styles/contact.css";

function ContactUs() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="contact-form-card">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter email address" required />
          </div>
          <input type="text" placeholder="Write a subject" required />
          <textarea placeholder="Write your message" required></textarea>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>

      <div className="contact-info">
        <div>
          <strong>Call Us:</strong><br />
          <span className="red">+1-234-567-8900</span>
        </div>
        <div>
          <strong>Hours:</strong><br />
          Mon-Fri: 11am - 8pm<br />
          Sat, Sun: 9am - 10pm
        </div>
        <div>
          <strong>Our Location:</strong><br />
          123 Bridge Street<br />
          Nowhere Land, LA 12345<br />
          United States
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
