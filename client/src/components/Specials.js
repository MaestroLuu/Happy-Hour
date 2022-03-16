import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Specials({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Card sx={{ maxWidth: 345, mx: "auto", marginBottom: "10px" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Box sx={{ my: "10px" }}>
              <Typography key={item._id} variant="h5">
                {item.itemName}
              </Typography>
              <Typography variant="h6">${item.price}</Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
