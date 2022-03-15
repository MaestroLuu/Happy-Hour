import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { QUERY_SINGLE_RESTAURANT } from "../util/queries";
import {useQuery } from "@apollo/client";
import {useParams} from 'react-router-dom';

export default function Specials() {
  
  const { restaurantId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_RESTAURANT, {
    variables: { restaurantId: restaurantId }
  });
  console.log(data);

  const restaurant = data?.restaurant || [];
  console.log(restaurant);

  return (
    <div>
      
        <Card key={restaurant._id} sx={{ maxWidth: 345, mx: "auto" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography
              style={{ marginTop: "30px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
             {restaurant.item}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              IPA
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Margarita
            </Typography>
          </CardContent>
        </Card>
     
    </div>
  );
}
