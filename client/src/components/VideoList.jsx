import React from "react";
import ReactPlayer from "react-player";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
  },

  gridListTile: {
    // backgroundColor: theme.palette.background.paper,
    width: 100,
  },
  girdListTileBar: {
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const VideoItem = ({ dataList }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={matchesLg ? 1 : 3}>
        {/* <GridListTile key="Subheader" cols={3}>
          <ListSubheader component="div">VideoList</ListSubheader>
        </GridListTile> */}
        {dataList.map((dataList) => (
          <GridListTile key={dataList.id} className={classes.gridListTile}>
            <ReactPlayer url={dataList.evidence} width="100%" height="100%" />

            <GridListTileBar
              className={classes.girdListTileBar}
              title={
                <span>
                  {dataList.country} {dataList.city}
                </span>
              }
              subtitle={
                <p>
                  offender: {dataList.offender}
                  victim: {dataList.victim}
                  time: {dataList.time}
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
