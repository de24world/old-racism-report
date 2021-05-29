import React from "react";

// Libarary
import ReactPlayer from "react-player";
import ReactCountryFlag from "react-country-flag";

// Material UI
import {
  makeStyles,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  IconButton,
  Link,
} from "@material-ui/core/";
import InfoIcon from "@material-ui/icons/Info";

// interface
import { IDataProps } from "../../interfaces/interfaces";

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
  // iconButton: {
  //   position: "absolute",
  // },
}));

interface Props {
  data: IDataProps[];
  isLoading: boolean;
}

function Weekly({ data, isLoading }: Props) {
  const classes = useStyles();
  const cards = [1, 2, 3];

  const lastObject = data[data.length - 1];
  const secondLastObject = data[data.length - 2];
  const thirdLastObject = data[data.length - 3];
  const recenltlyObject = [lastObject, secondLastObject, thirdLastObject];

  // console.log(recenltlyObject, "recenltlyObject three in Weekly");

  return (
    <>
      <Container className={classes.cardGrid}>
        <Typography variant="h4" color="primary" gutterBottom>
          Recently Updated Videos
        </Typography>
        {isLoading ? (
          <CircularProgress className="progressbar" />
        ) : (
          <Grid container spacing={4}>
            {recenltlyObject.map((three) => (
              <Grid item key={three.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <ReactPlayer
                    url={three.evidence}
                    width="100%"
                    height="100%"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      id : {three.id}
                      <ReactCountryFlag countryCode={three.countryCode} />
                      <Link href={`/video/${three.id}`}>
                        <IconButton
                          // aria-label={`info about ${data.title}`}
                          // className={classes.iconButton}
                          title="더보기"
                        >
                          <InfoIcon />
                        </IconButton>
                      </Link>
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
        )}
      </Container>
    </>
  );
}

export default Weekly;
