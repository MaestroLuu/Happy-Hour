import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
// import { IconButton } from "@material-ui/core";
// import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css";

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar" sx={{ mx: "auto" }}>
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
          <NavLink to="/restaurants/:restaurantId" className="navbar-link">
            Restaurants
          </NavLink>
          <NavLink to="/user" className="navbar-link">
            User Profile
          </NavLink>
          <NavLink to="/restaurants/:zipcode" className="navbar-link">
            Home
          </NavLink>
        </>
      )}
    </nav>
  );
}
