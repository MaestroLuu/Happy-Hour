import React from "react";
import FavoriteCards from "../components/FavoriteCards";

export default function UserProfile() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Favorites</h1>
      <FavoriteCards />
    </div>
  );
}
