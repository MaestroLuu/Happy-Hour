import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import { DELETE_REVIEW } from "../util/mutations"
import { useMutation } from "@apollo/client";
import { useAuth } from "../util/auth";

const styles = {
  textColor: {
    color: "black",
  }
}

export default function Reviews(props) {
  console.log(props)

  const user = useAuth();
  console.log(user)
  
  const loginCheck = () => {
    if (!user.user.username) {
    return false;
  }
}
    // Set up our mutation with an option to handle errors
    const [deleteReview, { error, loading }] = useMutation(DELETE_REVIEW);

    const handleSubmit = (reviewId) => {
      deleteReview({ variables: { reviewId, restaurantId: props.restaurant } })
    }
  return (
    <div>
      {props.reviews.map((review) => (
        <Card sx={{ maxWidth: 345, my: "10px", mx: "auto" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography key={review._id}>"{review.reviewText}"</Typography>
            <hr />
            {() => {if (user.isLoggedIn) {
              return (<p>hello</p>)
            }}}
            <Typography>Reviewed by: {review.reviewAuthor}</Typography>
            <Typography>{review.createdAt}</Typography>
            {user.user.username === review.reviewAuthor ? (
            <IconButton
            className="deleteIcon"
            onClick={() => handleSubmit(review._id)}
            >
            <DeleteIcon />
            </IconButton>) :
              ([])}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
