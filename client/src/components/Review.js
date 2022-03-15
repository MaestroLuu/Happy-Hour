import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <Card sx={{ maxWidth: 345, my: "10px", mx: "auto" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography key={review._id}>"{review.reviewText}"</Typography>
            <br />
            <Typography>Reviewed by: {review.reviewAuthor}</Typography>
            <Typography>{review.createdAt}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
