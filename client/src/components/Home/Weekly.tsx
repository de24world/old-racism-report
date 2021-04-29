import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core/";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Weekly = () => {
  const classes = useStyles();
  const cards = [1, 2, 3];

  return (
    <>
      <Container className={classes.cardGrid}>
        <Typography variant="h4" color="primary" gutterBottom>
          Weekly Videos
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <ReactPlayer
                  url="https://youtu.be/iqjLiXaQrng"
                  width="100%"
                  height="100%"
                />

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Weekly;
