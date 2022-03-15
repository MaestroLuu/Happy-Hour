import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

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

  return (
    <div>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: 400,
          mx: "auto",
          marginTop: "60px"
        }}
        elevation={3}
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

        <BottomNavigationAction
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
          <NavLink to="/restaurants">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </NavLink>
          <NavLink to="/login">
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </NavLink>
          <NavLink to="/signup">
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
          </NavLink>
          <NavLink to="/user">
            <MenuItem onClick={handleClose}>Favorites</MenuItem>
          </NavLink>
        </Menu>
      </BottomNavigation>
    </div>
  );
}
