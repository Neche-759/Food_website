import React from "react";
import imageone from "../asset/Mask group.png";
import imagetwo from "../asset/Mask group (9).png";
import imagethree from "../asset/Mask group (8).png";
import imagefour from "../asset/Mask group (7).png";
import imagefive from "../asset/Mask group (6).png";
import imagesix from "../asset/Mask group (5).png";
import imageseven from "../asset/Mask group (4).png";
import imageeight from "../asset/Mask group (3).png";
import imagenine from "../asset/Mask group (2).png";
import imageten from "../asset/Mask group (10).png";

// utility to get simple relative time (minutes/hours/days)
function formatRelativeTime(dateString) {
  const deltaSeconds = Math.floor((Date.now() - new Date(dateString)) / 1000);
  if (deltaSeconds < 60) return `${deltaSeconds} seconds ago`;
  const deltaMinutes = Math.floor(deltaSeconds / 60);
  if (deltaMinutes < 60) return `${deltaMinutes} minutes ago`;
  const deltaHours = Math.floor(deltaMinutes / 60);
  if (deltaHours < 24) return `${deltaHours} hours ago`;
  const deltaDays = Math.floor(deltaHours / 24);
  return `${deltaDays} day${deltaDays > 1 ? "s" : ""} ago`;
}

const data = [
  {
    id: "1",
    title: "Rice and Beans",
    image: imageone,
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    body: "Classic combo served fresh."
  },
  {
    id: "2",
    title: "Spicy Stew",
    image: imagetwo,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    body: "A hearty stew with peppers and herbs."
  },
  {
    id: "3",
    title: "Grilled Fish",
    image: imagethree,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    body: "Lightly seasoned and perfectly charred."
  },
  {
    id: "4",
    title: "Vegetable Medley",
    image: imagefour,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    body: "Seasonal veggies sautéed to perfection."
  },
  {
    id: "5",
    title: "Plantain Delight",
    image: imagefive,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    body: "Sweet fried plantains with a hint of spice."
  },
  {
    id: "6",
    title: "Jollof Rice",
    image: imagesix,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    body: "Rich and smoky rice with tomato base."
  },
  {
    id: "7",
    title: "Fried Chicken",
    image: imageseven,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    body: "Crispy, golden, and juicy inside."
  },
  {
    id: "8",
    title: "Salad Bowl",
    image: imageeight,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    body: "Fresh greens with tangy dressing."
  },
  {
    id: "9",
    title: "Sweet Dessert",
    image: imagenine,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    body: "A little sweetness to finish the meal."
  },
  {
    id: "10",
    title: "Chef's Special",
    image: imageten,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 100).toISOString(),
    body: "Today’s surprise curated by the chef."
  }
];

export default function Body() {
  return (
   <div>


    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
  <h1
    style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontSize: "2.5rem",
      fontWeight: "600",
      margin: "0 0 0.5rem",
      color: "#333"
    }}
  >
    Our Blog &amp; Articles
  </h1>
  <span
    style={{
      display: "block",
      maxWidth: "600px",
      margin: "0 auto",
      fontSize: "1rem",
      color: "#555",
      lineHeight: 1.5
    }}
  >
    We consider all the drivers of change, giving you the components you need
    to create something truly special.
  </span>
</div>

     <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1rem",
        padding: "1rem"
      }}
    >
      {data.map((item) => (
        <article
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            transition: "transform .2s, box-shadow .2s",
            display: "flex",
            flexDirection: "column",
            position: "relative"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
          }}
        >
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <div style={{ padding: "0.75rem 1rem", flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0 0 .5rem", fontSize: "1.1rem" }}>{item.title}</h3>
            <p style={{ flex: "1 1 auto", margin: "0 0 .75rem", fontSize: "0.9rem", lineHeight: 1.3 }}>
              {item.body}
            </p>
            <div style={{ fontSize: "0.7rem", color: "#555" }}>
              <div>Created: {new Date(item.createdAt).toLocaleDateString()}</div>
              <div style={{ opacity: 0.8 }}>{formatRelativeTime(item.createdAt)}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
   </div>
  );
}
