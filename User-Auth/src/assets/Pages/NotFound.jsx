import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <p>
        Enter an invalid route intentionally to see the Not Found page.
      </p>

      <p>
        Try any URL other than the routes defined in this project to display the
        Not Found page.
      </p>

      <Link to="/">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;