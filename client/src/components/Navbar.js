import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
// import { IconButton } from "@material-ui/core";
// import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar">
        <NavLink to="/" className="navbar-link">
          Splash
        </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/protected" className="navbar-link">
            User
          </NavLink>
          <button className="navbar-link" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="navbar-link">
            Signup
          </NavLink>
          <NavLink to="/restaurants" className="navbar-link">
            Restaurants
          </NavLink> 
          <NavLink to="/user" className="navbar-link">
            User Profile
          </NavLink> 
          <NavLink to="/home" className="navbar-link">
            Home
          </NavLink> 
        </>
      )}
    </nav>
  );
}
