import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
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
      <br></br><br></br>
    <Box sx={{ 
      width: "100%", 
      mx: "auto",
      bottom: 0,
      left: 0,
      right: 0,
      position: "fixed",
      backgroundColor: "black"
      }}
      elevation={3}
      >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        style={{backgroundColor: "transparent", display: "flex", justifyContent: "space-evenly"}}
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
        {isLoggedIn ? 
        (
          <NavLink to="/landing">
          <BottomNavigationAction
            label="logout"
            value="logout"
            icon={<LogoutIcon />}
            onClick={logout}
          />
        </NavLink>
        ):
        (
          <NavLink to="/login">
          <BottomNavigationAction
            label="login"
            value="login"
            icon={<LoginIcon />}
          />
        </NavLink>
        )}
      </BottomNavigation>
      </Box>
    </div>
  );
}

// test