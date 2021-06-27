import React from "react";
import "./App.css"

function NavBar() {
  return (
    <nav className="site-nav grid">
      <h1>Ochuwa Imodagbe</h1>
      <ul>
        <li>
          <a href="https://blog.leartify.com/contact-us/" target="_blank">Contact</a>
        </li>
        <li>
          <a href="https://blog.leartify.com/" target="_blank">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
