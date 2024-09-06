import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import achievementsData from "../data/achievements.json";

function CrafterPage() {
  const { crafterCode } = useParams();
  const [achievements, setAchievements] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);

  useEffect(() => {
    const crafterData = achievementsData[crafterCode];
    if (crafterData) {
      const achievementList = crafterData.achievements;
      setAchievements(achievementList);

      const totalPoints = achievementList.reduce(
        (acc, achievement) => acc + achievement.points,
        0
      );
      const currentPoints = achievementList.reduce(
        (acc, achievement) =>
          achievement.progress >= achievement.total
            ? acc + achievement.points
            : acc,
        0
      );

      setTotalPoints(totalPoints);
      setCurrentPoints(currentPoints);
    }
  }, [crafterCode]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {crafterCode}'s Achievements
      </Typography>

      <Typography variant="h6">
        Puntos: {currentPoints} de {totalPoints}
      </Typography>

      <Grid container spacing={2}>
        {achievements.map((achievement, index) => {
          const isComplete =
            achievement.progress >= achievement.total ||
            (achievement.total === 1 && achievement.progress === 1);

          return (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{achievement.name}</Typography>
                  {achievement.total !== 1 ? (
                    <>
                      <Typography>
                        Progress: {achievement.progress}/{achievement.total}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={(achievement.progress / achievement.total) * 100}
                      />
                      <Typography variant="body2">
                        {achievement.points} points
                      </Typography>
                    </>
                  ) : (
                    <Typography>
                      {achievement.progress === 1
                        ? "Completed"
                        : "Not Completed"}
                    </Typography>
                  )}
                  {isComplete && (
                    <Box display="flex" alignItems="center">
                      <CheckCircleIcon color="success" />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ marginLeft: 8 }}>
                        Completed
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CrafterPage;
