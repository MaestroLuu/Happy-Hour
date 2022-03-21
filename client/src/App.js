import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AllRestaurants from "./pages/AllRestaurants";
import Login from "./pages/Login";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import SingleRestaurant from "./pages/SingleRestaurant";
import UserProfile from "./pages/UserProfile";
import Landing from "./pages/Landing";
import { NavLink } from "react-router-dom";
import beer3 from "../src/components/beers3.png"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <NavLink style={{textDecoration: "none", color: "black"}} to="/">
         <h1 style={{textAlign: "center"}}>
           <img src={beer3} alt="home" />
         </h1>
         </NavLink>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/restaurants" element={<AllRestaurants />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/restaurants/:restaurantId" element={<SingleRestaurant />} />
            <Route path="/user" element={<UserProfile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
