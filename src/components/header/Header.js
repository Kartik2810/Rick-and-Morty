import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header mb-3">
        <div className="logo ">
          {" "}
          <h2 className="text-center title">
            Rick and <span className="text-primary">Morty</span>
          </h2>
        </div>
        <nav className="nav fs-5">
          <ul>
            <li>
              <NavLink  to="/episode" className="nav-link fw-bolder">Episode</NavLink>
            </li>
            <li>
              <NavLink to="/location" className="nav-link fw-bolder">Location</NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link fw-bolder">Characters</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
