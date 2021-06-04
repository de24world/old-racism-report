import React from "react";

// Libarary
import ReactPlayer from "react-player";
import ReactCountryFlag from "react-country-flag";

// Material UI
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  Link,
} from "@material-ui/core/";

// interface
import { IDataProps } from "../../interfaces/interfaces";

const useStyles = makeStyles((theme) => ({
  root: {},
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

interface Props {
  data: IDataProps[];
  isLoading: boolean;
}

function Recently({ data, isLoading }: Props) {
  const classes = useStyles();
  const cards = [1, 2, 3];

  const lastObject = data[data.length - 1];
  const secondLastObject = data[data.length - 2];
  const thirdLastObject = data[data.length - 3];
  const recenltlyObject = [lastObject, secondLastObject, thirdLastObject];

  return (
    <div className="recently __block">
      <Typography variant="h5" gutterBottom>
        Recently Updated Videos
      </Typography>
      {isLoading ? (
        <CircularProgress className="progressbar" />
      ) : (
        <Grid container spacing={4}>
          {recenltlyObject.map((three) => (
            <Grid item key={three.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <ReactPlayer url={three.evidence} width="100%" height="100%" />

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    <ReactCountryFlag countryCode={three.countryCode} />
                    {three.country} / {three.city}
                  </Typography>
                  <Typography>
                    Time : {three.time} <br />
                    Offender : {three.offender} <br />
                    Victim : {three.victim} <br />
                  </Typography>
                </CardContent>

                <CardActions>
                  <Link href={`/video/${three.id}`}>
                    <Button size="small" color="primary">
                      Detail
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Recently;
