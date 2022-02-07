import '../App.css';
import {Nav, Navbar} from "react-bootstrap";
// import {Link, useLocation} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/pawtomatic_icon_transparent.png';

export const NavPages = {
  HOME: "home",
  PROJECT: "project",
  APP: "app"
}

function Navigation(props) {
  const activePage = props.activePage;
  
  // let location = useLocation();
  // let isHome = (location.pathname === "/");
  // let isProject = (location.pathname === "/project");
  // let isApp = (location.pathname === "/app");
  
  return (
    <Navbar>
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} height="25" alt="Pawtomatic Logo!"/>
          Pawtomatic
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/project'>
            <Nav.Link active={activePage === '/project'}>Project</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to='/app'>
            <Nav.Link active={activePage === '/app'}>App</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
