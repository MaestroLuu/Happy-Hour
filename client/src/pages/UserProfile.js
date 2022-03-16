import React from "react";
import Footer from "../components/Footer";
import FavoriteCards from "../components/FavoriteCards";

export default function UserProfile() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Favorites</h1>
      <FavoriteCards />
      <Footer />
    </div>
  );
}
