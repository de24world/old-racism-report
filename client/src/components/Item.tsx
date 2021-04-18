import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import ReactCountryFlag from "react-country-flag";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
  },
  wrapper: {
    position: "relative",
    paddingTop: "56.25%",
  },
  player: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
}));

const Item = ({ item }) => {
  const {
    id,
    offender,
    victim,
    time,
    country,
    countryCode,
    city,
    evidence,
    level,
  } = item;
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <Container maxWidth="md">
              <div className={classes.wrapper}>
                <ReactPlayer
                  className={classes.player}
                  url={evidence}
                  width="100%"
                  height="100%"
                />
              </div>
            </Container>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Time" secondary={time} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ReactCountryFlag countryCode={countryCode} />
              <ListItemText primary="Country" secondary={country} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

Item.propTypes = {};

export default Item;
