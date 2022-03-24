import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAuth } from "../util/auth";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ADD_REVIEW } from "../util/mutations";
import { useMutation } from "@apollo/client";

export default function ReviewForm({restaurantId}) {

    const { isLoggedIn } = useAuth();

    const [formState, setFormState] = useState({
        reviewText: '',
        restaurantId: restaurantId,
      });

      const [characterCount, setCharacterCount] = useState(0);
    
      // Set up our mutation with an option to handle errors
      const [addReview, { error, loading }] = useMutation(ADD_REVIEW);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_Review` mutation
        try {
          addReview({ variables: { ...formState } });
          
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'reviewText' && value.length <= 280) {
          setFormState({ ...formState, [name]: value });
          setCharacterCount(value.length);
        } else if (name !== 'reviewText') {
          setFormState({ ...formState, [name]: value });
        }
      };

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Add a review"
            name="reviewText"
            multiline
            rows={6}
            placeholder="Leave a review!"
            sx={{
              backgroundColor: "white",
            }}
            value={formState.reviewText}
            onChange={handleInputChange}
          ></TextField>
          <br></br>
          <Button
            sx={{ mx: "10px", my: "10px", backgroundColor: "rgb(222,119,1)" }}
            variant="contained"
            size="large"
            type="submit"
            onClick={handleSubmit}
          >
            Submit review
          </Button>
        </div>
      ) : (
        <preformat
          style={{
            color: "black",
            backgroundColor: "white",
            padding: "10px",
            width: "39ch",
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
          to post a review!
        </preformat>
      )}
    </Box>
  );
}
