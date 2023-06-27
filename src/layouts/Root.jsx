import React from "react";
import { NavLink ,Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>routers</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="about">about</NavLink>
        </nav>
          </header>
          <main>
              <Outlet/>
          </main>
    </div>
  );
}

export default Root;
