// src/components/Body.js
import React from "react";
import { Link } from "react-router-dom";
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
import imageeleven from "../asset/Mask group (15).png";

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

export const data = [
  {
    id: "1",
    title: "Rice and Beans",
    image: imageone,
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.."
  },
  {
    id: "2",
    title: "Spicy Stew",
    image: imagetwo,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    
  },
  {
    id: "3",
    title: "Grilled Fish",
    image: imagethree,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "4",
    title: "Vegetable Medley",
    image: imagefour,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "5",
    title: "Plantain Delight",
    image: imagefive,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "6",
    title: "Jollof Rice",
    image: imagesix,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "7",
    title: "Fried Chicken",
    image: imageseven,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "8",
    title: "Salad Bowl",
    image: imageeight,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "9",
    title: "Sweet Dessert",
    image: imagenine,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: "10",
    title: "Chef's Special",
    image: imageten,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 100).toISOString(),
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in 45 BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
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
          We consider all the drivers of change, giving you the components you
          need to create something truly special.
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
          <Link
            to={`/blog/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                transition: "transform .2s, box-shadow .2s",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%"
                }}
              >
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
              <div
                style={{
                  padding: "0.75rem 1rem",
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3 style={{ margin: "0 0 .5rem", fontSize: "1.1rem" }}>
                  {item.title}
                </h3>
               <p
            style={{
              flex: "1 1 auto",
              margin: "0 0 .75rem",
              fontSize: "0.9rem",
              lineHeight: 1.3
            }}
            >
            {item.body.length > 100 ? item.body.substring(0, 90) + "..." : item.body}
            </p>

                <div style={{ fontSize: "0.7rem", color: "#555" }}>
                  <div>
                    Created: {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                  <div style={{ opacity: 0.8 }}>
                    {formatRelativeTime(item.createdAt)}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      


    </div>
  );
}
