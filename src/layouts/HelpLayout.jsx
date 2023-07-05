import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h1>website help</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores.
      </p>
      <nav>
        <NavLink to="faq"> FAQ</NavLink>
        <NavLink to="contact"> Contact</NavLink>
      </nav>
      <Outlet />
    </div> 
  );
}

export default HelpLayout;
