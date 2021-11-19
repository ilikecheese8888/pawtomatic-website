import '../App.css';
import logo from '../assets/pawtomatic_icon_transparent.png';
import {Link, useLocation} from "react-router-dom";

export const NavPages = {
  HOME: "home",
  PROJECT: "project",
  APP: "app"
}

function Navbar(props) {
  const activePage = props.activePage;
  console.log("Active page is: " + activePage);
  let location = useLocation();
  let isHome = (location.pathname === "/");
  let isProject = (location.pathname === "/project");
  let isApp = (location.pathname === "/app");
  console.log(location.pathname);
  console.log(isProject);

  return (
      <div className="container-navbar">
        <nav className="navbar navbar-expand-lg navbar-light nav-bg-dark">
          <Link className="navbar-brand" to="/">
            <img src={logo} height="25" alt="Pawtomatic Logo!"/>
            Pawtomatic
          </Link>
          {/*
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          */}

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${isProject ? "active" : ""}`}>
                <Link className="nav-link" to="/project">Project</Link>
              </li>
              <li className={`nav-item ${isApp ? "active" : ""}`}>
                <Link className="nav-link" to="/app">App</Link>
              </li>
              {/*
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
              */}
            </ul>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
