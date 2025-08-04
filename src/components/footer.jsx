import React from "react";
import facebook from "../asset/2.png";
import twitter from "../asset/1.png";
import instagram from "../asset/3.png";
import github from "../asset/4.png";
import egg from "../asset/Mask group (11).png";
import fries from "../asset/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png";
import nkwobi from "../asset/Mask group (12).png";
import burger from "../asset/Mask group (13).png";
import logo from "../asset/japanese-food.png"

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1f1f1f",
        color: "#f5f5f5",
        padding: "3rem 1rem",
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.4
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem"
        }}
      >
        {/* Brand / About */}
        <div
          style={{
            flex: "1 1 260px",
            minWidth: 260,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem"
          }}
        >
       <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "0.5rem" // space between logo and name
  }}
>
  <img
    src={logo}
    alt="logo"
    style={{
      width: 40,
      height: 40,
      objectFit: "contain"
    }}
  />
  <h1
    style={{
      margin: 0,
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.75rem",
      lineHeight: 1
    }}
  >
    Bistro Bliss
  </h1>
</div>

         <p
  style={{
    margin: 0,
    fontSize: "0.9rem",
    maxWidth: 360,
    textAlign: "left"
  }}
>
  In the new era of technology we look to the future with certainty
  and pride for our company and community.
</p>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            {[facebook, twitter, instagram, github].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={
                  i === 0
                    ? "facebook"
                    : i === 1
                    ? "twitter"
                    : i === 2
                    ? "instagram"
                    : "github"
                }
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                  filter: "brightness(1.2)"
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation columns */}
        <div
          style={{
            flex: "1 1 140px",
            minWidth: 140,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}
        >
          <h4 style={{ margin: "0 0 .5rem" }}>Pages</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              fontSize: "0.85rem"
            }}
          >
            {["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"].map(
              (p) => (
                <li key={p} style={{ cursor: "pointer" }}>
                  {p}
                </li>
              )
            )}
          </ul>
        </div>

        <div
          style={{
            flex: "1 1 140px",
            minWidth: 140,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}
        >
          <h4 style={{ margin: "0 0 .5rem" }}>Utility Pages</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              fontSize: "0.85rem"
            }}
          >
            {[
              "Start Here",
              "Styleguide",
              "Password Not Protected",
              "404 Not Found",
              "Licenses",
              "Changelog",
              "View More"
            ].map((u) => (
              <li key={u} style={{ cursor: "pointer" }}>
                {u}
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram grid */}
        <div
          style={{
            flex: "1 1 260px",
            minWidth: 260,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}
        >
          <h4 style={{ margin: "0 0 .4rem" }}>Follow Us On Instagram</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.5rem"
            }}
          >
            {[egg, fries, nkwobi, burger].map((src, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "8px",
                  background: "#222"
                }}
              >
                <img
                  src={src}
                  alt={`insta-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom small print */}
      <div
        style={{
          marginTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "1rem",
          fontSize: "0.65rem",
          textAlign: "center",
          opacity: 0.85
        }}
      >
        © {new Date().getFullYear()} Bistro Bliss. All rights reserved.
      </div>
    </footer>
  );
}
