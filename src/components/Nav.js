import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const isLogged = useSelector((state) => state.isLogged);
  const profileId = useSelector((state) => state.userRegister.id);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMainMenu"
        aria-controls="navMainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navMainMenu" className="navbar-collapse collapse">
        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/cities" className="nav-item nav-link active">
            Cities
          </Link>
          {isLogged ? (
            <Link
              to={`/profile/${profileId}`}
              className="nav-item nav-link active"
            >
              Profile
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
