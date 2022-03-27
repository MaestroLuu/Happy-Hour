import React from "react";
import FavoriteCards from "../components/FavoriteCards";
import { useAuth } from "../util/auth";
import { NavLink } from "react-router-dom";

export default function UserProfile() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Favorites</h1>
   
      {isLoggedIn ? (
   <FavoriteCards />

      ): (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "10px",
              width: "39ch",
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            You need to be{" "}
            <NavLink
              to="/login"
              style={{ color: "blue", textDecoration: "none" }}
            >
              logged in
            </NavLink>{" "}
            or{" "}
            <NavLink
              to="/signup"
              style={{ color: "blue", textDecoration: "none" }}
            >
              sign up
            </NavLink>{" "}
            to save and view favorite restaurants!
          </p>
        </div>)}
      
    </div>
  );
}
