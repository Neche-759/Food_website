// src/components/BlogDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../components/body";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = data.find((item) => item.id === id);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        ← Back to Blog List
      </Link>
      <h1 style={{ marginTop: "1rem" }}>{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          margin: "1rem 0"
        }}
      />
      <p style={{ fontSize: "1rem", color: "#444" }}>{blog.body}</p>
      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        Created: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
