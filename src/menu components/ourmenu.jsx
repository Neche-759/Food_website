import React, { useState } from "react";
import "../styles/menu.css"

export default function MenuSection() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

  return (
    <section className="menu-section">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-subtitle">
        We consider all the drivers of change gives you the components <br />
        you need to change to create a truly happens.
      </p>

      
      <div className="menu-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={active === category ? "active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
