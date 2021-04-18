import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import ReactCountryFlag from "react-country-flag";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
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
