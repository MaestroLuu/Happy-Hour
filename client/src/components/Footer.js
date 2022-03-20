import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useAuth } from "../util/auth";

import { NavLink } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { isLoggedIn, logout } = useAuth();
  return (
    <div>
      {/* new footer? */}
    <Box sx={{ 
      width: "50%", 
      mx: "auto",
      bottom: 0,
      left: 0,
      right: 0,
      position: "fixed", 
      color: "transparent"
      }}
      elevation={3}
      >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <NavLink to="/restaurants">
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<SearchIcon />}
          />
        </NavLink>
        <NavLink to="/user">
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
        </NavLink>

        {/* <BottomNavigationAction
          label="Menu"
          value="menu"
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          icon={<MenuIcon />}
        />
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {isLoggedIn ? (
            <div>
              <NavLink to="/user">
                <MenuItem onClick={handleClose}>Favorites</MenuItem>
              </NavLink>
              <NavLink to="/restaurants">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </NavLink>
              <NavLink to="/login">
                <MenuItem onClick={logout}>Logout</MenuItem>
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/restaurants">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </NavLink>
              <NavLink to="/login">
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </NavLink>

              <NavLink to="/signup">
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </NavLink>
            </div>
          )}
        </Menu> */}
      </BottomNavigation>
      </Box>
    </div>
  );
}

// test