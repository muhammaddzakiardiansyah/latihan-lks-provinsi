import { Link } from "react-router-dom";

export const Navbar = () => {
  const name = localStorage.getItem("name");
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <div className="container">
        <p className="navbar-brand">Job Seekers Platform</p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            {name ? (
              <>
                <li className="nav-item">
                  <p className="nav-link">
                    {name}
                  </p>
                </li>
                <li className="nav-item">
                  <Link to={"/logout"}>
                  <p className="nav-link">
                    Logout
                  </p>
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to={"/login"}>
                  <p className="nav-link">Login</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
