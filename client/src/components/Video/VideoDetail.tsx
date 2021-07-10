import React from "react";

// Interface Typescript
import { IDataProps } from "../../interfaces/interfaces";

// Libaray
import ReactPlayer from "react-player";
import ReactCountryFlag from "react-country-flag";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  Tooltip,
} from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SportsMmaIcon from "@material-ui/icons/SportsMma";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
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
  flagIcon: {
    position: "relative",
  },
  tooltipIcon: {
    position: "absolute",
    left: "7rem",
    top: "1rem",
  },
}));

interface ItemProps {
  data: IDataProps;
}

function VideoDetail({ data }: ItemProps): JSX.Element {
  const classes = useStyles();

  const {
    offender,
    victim,
    time,
    country,
    countryCode,
    city,
    evidence,
    level,
  } = data;

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
                  <ReactCountryFlag
                    countryCode={countryCode}
                    className={classes.flagIcon}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Country" secondary={country} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MyLocationIcon />
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
                <HelpIcon className={classes.tooltipIcon} />
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
}

export default VideoDetail;
