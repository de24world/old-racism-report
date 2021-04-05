import React from "react";
import ReactPlayer from "react-player";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const VideoItem = ({ dataList }) => {
  const {
    id,
    offender,
    victim,
    time,
    country,
    city,
    evidence,
    level,
  } = dataList;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader component="div">VideoList</ListSubheader>
        </GridListTile>
        {dataList.map((dataList) => (
          <GridListTile key={dataList.id}>
            <ReactPlayer url={dataList.evidence} />

            <GridListTileBar
              title={
                <span>
                  {dataList.country} {dataList.city}
                </span>
              }
              subtitle={
                <p>
                  offender: {dataList.offender} <br></br>
                  victim: {dataList.victim} <br></br>
                  time: {dataList.time} <br></br>
                  level: {dataList.level}
                </p>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${dataList.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default VideoItem;
