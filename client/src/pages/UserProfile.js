import React from "react";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export default function UserProfile() {
    return (
        <div>
        <h1 style={{textAlign: "center"}}>Favorites</h1>
        <Cards />
        <Footer />
        </div>
    );
}