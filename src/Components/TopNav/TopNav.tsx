import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './TopNav.css';

const TopNav: React.FC = () => {
  return (
    <Navbar className="topnav-container">
      <div className="logo">MyApp</div>
      <Nav className="nav-links">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/profile">
          Profile
        </NavLink>
       
        <NavLink className="nav-item" to="/tracker">
          Tracker
        </NavLink>
       
        <NavLink className="nav-item" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="nav-item" to="/login">
          Login
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
