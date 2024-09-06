import React from "react";
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const classes = [
  { name: "Carpenter", code: "CRP" },
  { name: "Blacksmith", code: "BSM" },
  { name: "Armorer", code: "ARM" },
  { name: "Leatherworker", code: "LTW" },
  { name: "Weaver", code: "WVR" },
  { name: "Alchemist", code: "ALC" },
  { name: "Culinarian", code: "CUL" },
  { name: "Botanist", code: "BTN" },
  { name: "Miner", code: "MIN" },
  { name: "Fisher", code: "FSH" },
];

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Final Fantasy XIV: Achievement Tracker
      </Typography>
      <Grid2 container spacing={2}>
        {classes.map((crafter) => (
          <Grid2 item xs={12} sm={6} md={4} key={crafter.code}>
            <Card>
              <CardActionArea component={Link} to={`/crafter/${crafter.code}`}>
                <CardContent>
                  <Typography variant="h6">{crafter.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Home;
