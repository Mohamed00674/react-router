import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h2>Page not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
        repellendus?
      </p>
      <p>
        got to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}

export default NotFound;
