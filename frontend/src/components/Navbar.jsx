import { Link } from "react-router-dom";

export const Navbar = () => {
  const token = localStorage.getItem("token");
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
            {token ? (
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Marsito Kusmawati
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
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
