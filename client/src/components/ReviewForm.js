import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAuth } from "../util/auth";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ReviewForm() {
  const { isLoggedIn, logout } = useAuth();
  // const [formState, setFormState] = useState(initialFormState);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoggedIn ? (
          <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={6}
          defaultValue="Default Value"
          sx={{
            backgroundColor: "white",
          }}
        ></TextField>
        <br></br>
        <Button
                    sx={{ mx: "10px", my: "10px", backgroundColor: "rgb(222,119,1)"}}
                    variant="contained"
                    size="large"
                    type="submit"
                    >
                        Submit review
                        </Button>
        </div>
      ) : (
        <preformat style={{ color: "black", backgroundColor: "white", padding: "10px", width: "39ch" }}>
          You need to be <NavLink to="/login" style={{color: "blue", textDecoration: "none"}}>logged in</NavLink> or <NavLink to="/signup" style={{color: "blue", textDecoration: "none"}}>sign up</NavLink> to post a review!
        </preformat>
      )}
    </Box>
  );
}
