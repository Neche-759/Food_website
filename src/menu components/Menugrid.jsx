import React from "react";
import "../styles/menu.css"

export default function MenuGrid() {
  const menuItems = [
    { id: 1, name: "Fried Eggs", price: 9.99, image: "/fried eggs.png" },
    { id: 2, name: "Hawaiian Pizza", price: 15.99, image: "/Hawaiian Pizza.png" },
    { id: 3, name: "Martinez Cocktail", price: 7.25, image: "/Martinez Cocktail.png" },
    { id: 4, name: "Butterscotch Cake", price: 20.99, image: "/Butterscotch cake.png" },
    { id: 5, name: "Mint Lemonade", price: 5.89, image: "/Mint lemonade.png" },
    { id: 6, name: "Chocolate Icecream", price: 18.05, image: "/Chocolate icecream.png" },
    { id: 7, name: "Cheese Burger", price: 12.55, image: "/cheese burger.png" },
    { id: 8, name: "Classic Waffles", price: 12.99, image: "/classic waffles.png" },
  ];

  return (
    <div className="menu-grid">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-card">
          <img src={item.image} alt={item.name} />
          <div className="menu-info">
            <p className="price">${item.price.toFixed(2)}</p>
            <h3>{item.name}</h3>
            <p className="desc">
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
