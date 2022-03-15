import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <Card sx={{ maxWidth: 345, mx: "auto" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography key={review._id}>{review.reviewText}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
