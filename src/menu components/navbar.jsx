import React from "react"
import "../styles/menu.css"

export const Menu_nav = ()=>{

    return(
        <div>
            <header>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <span className="call">📞 (414) 857-0107</span>
        <span className="email">📧 yummy@bistrobliss</span>
        <div className="social-icons">
          <a href="#">🔗</a>
          <a href="#">🔗</a>
          <a href="#">🔗</a>
          <a href="#">🔗</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-icon" />
        </div>

        <ul className="nav-links">
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="menu" className="active">Menu</a></li>
          <li><a href="pages">Pages</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <a href="/booktable">
        <button className="book-btn">Book A Table</button>
        </a>
      </nav>
    </header>
        </div>
    )
}