import React from "react";
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
  Tooltip,
} from "@material-ui/core";
import FlagIcon from "@material-ui/icons/Flag";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SportsMmaIcon from "@material-ui/icons/SportsMma";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";

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

const VideoDetail = ({ item }) => {
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
          // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <div className={classes.wrapper}>
              <ReactPlayer
                className={classes.player}
                url={evidence}
                width="100%"
                height="100%"
              />
            </div>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FlagIcon />
                </Avatar>
              </ListItemAvatar>
              <ReactCountryFlag countryCode={countryCode} />
              <ListItemText primary="Country" secondary={country} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationCityIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DateRangeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Time" secondary={time} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SportsMmaIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Offender" secondary={offender} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PregnantWomanIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Victim" secondary={victim} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ReportIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Level" secondary={level} />
              <Tooltip title="레벨1은 언어 폭력 / 레벨2는 폭행 / 레벨3은 살인, 강간 등 강력범죄">
                <HelpIcon />
              </Tooltip>
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

export default VideoDetail;
