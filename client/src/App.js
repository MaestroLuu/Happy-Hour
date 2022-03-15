import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import Restaurant from "./pages/Restaurant";
import UserProfile from "./pages/UserProfile";
import Landing from "./pages/Landing";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/happy-hour" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/user" element={<UserProfile />} />
            {/* Use <RequiredAuth> for pages that should only be accessible to a
            user that has logged in.*/}
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPageExample />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
