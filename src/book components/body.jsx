import React from "react";
import "../styles/book.css";

function Booking() {
  return (
    <div className="booking-section">
      <h1 className="heading">Book A Table</h1>
      <p className="subheading">
        We consider all the drivers of change gives you the components you need
        to create to create a truly happens.
      </p>
      <div className="booking-card">
        <form className="booking-form">
          <div className="row">
            <div>
              <label>Date</label>
              <input type="date" required />
            </div>
            <div>
              <label>Time</label>
              <input type="time" required />
            </div>
          </div>
          <div className="row">
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <label>Phone</label>
              <input type="tel" placeholder="+234-xxx-xxxx" required />
            </div>
          </div>
          <div>
            <label>Total Person</label>
            <select>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            Book A Table
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
