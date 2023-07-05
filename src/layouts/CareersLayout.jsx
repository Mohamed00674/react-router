import React from "react";
import { Outlet } from "react-router-dom";

function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Carrers </h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Outlet />
    </div>
  );
}

export default CareersLayout;
