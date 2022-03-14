import { useAuth } from "../util/auth";
import TextField from '@mui/material/TextField';
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Box from '@mui/material/Box';

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      {/* <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1> */}
 
      <TextField sx={{ maxWidth: 300, marginTop: "50px", mx: "auto"}} style={{display: "flex", justifyContent: "center"}} id="outlined-search" label="Search By Zipcode" type="search" />
      <Box sx={{mx: "auto"}}>
        <Filter />
      </Box>
      <hr />

      <Cards />
      <br />
      <Cards />
      <br />
      <Cards />
      <br />


      <Footer />
    </div>
  );
}
