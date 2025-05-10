import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './TopNav.css';

const TopNav: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Navbar className="topnav-container">
      <div className="logo">MyApp</div>
      <Nav className="nav-links">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        {isAuthenticated && (
          <>
            <NavLink className="nav-item" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="nav-item" to="/profile">
              Profile
            </NavLink>
          </>
        )}
        <NavLink className="nav-item" to="/about">
          About
        </NavLink>
        {!isAuthenticated && (
          <>
            <NavLink className="nav-item" to="/signup">
              Sign Up
            </NavLink>
            <NavLink className="nav-item" to="/login">
              Login
            </NavLink>
          </>
        )}
        {isAuthenticated && <LogoutButton />}
      </Nav>
    </Navbar>
  );
};

export default TopNav;