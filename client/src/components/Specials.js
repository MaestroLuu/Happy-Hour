import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Specials({ items }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, mx: "auto" }}>
        <CardContent style={{ textAlign: "center" }}>
          {items.map((item) => (
            <Box sx={{ my: "10px" }}>
              <Typography key={item._id}>{item.itemName}</Typography>
              <Typography>${item.price}</Typography>
              <Typography>{item.description}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
