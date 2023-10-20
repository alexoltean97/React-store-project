import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="main-header bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            My Brand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ flexDirection: "row-reverse" }}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={props.onLoginClick}
                  style={{ cursor: "pointer" }}
                >
                  Log In
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                 Admin
                </a>
              </li>

              <li className="nav-item">
                <a onClick={props.onCartClick} className="nav-link" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
