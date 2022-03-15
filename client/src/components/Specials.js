import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function Specials({items}) {
  

  return (
    <div>
      
        <Card sx={{ maxWidth: 345, mx: "auto" }}>
          <CardContent style={{ textAlign: "center" }}>
            
          {items.map((item) => (
            <Typography key={item._id}>{item.itemName}</Typography>))}

          </CardContent>
        </Card>
     
    </div>
  );
}
