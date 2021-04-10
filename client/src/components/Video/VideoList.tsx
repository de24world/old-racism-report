import React from "react";
import ReactPlayer from "react-player";

import Link from "@material-ui/core/Link";
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

const VideoItem = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("md"));
  // https://codesandbox.io/s/usemediaquery-3-options-pm88p?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js:27-80

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={matchesLg ? 1 : 4}>
        {/* <GridListTile key="Subheader" cols={3}>
          <ListSubheader component="div">VideoList</ListSubheader>
        </GridListTile> */}
        {data.map((data) => (
          <GridListTile key={data.id} className={classes.gridListTile}>
            <ReactPlayer url={data.evidence} width="100%" height="100%" />

            <GridListTileBar
              className={classes.girdListTileBar}
              title={
                <span>
                  {data.country} {data.city}
                </span>
              }
              subtitle={
                <p>
                  offender: {data.offender}
                  victim: {data.victim}
                  time: {data.time}
                  level: {data.level}
                </p>
              }
              actionIcon={
                <Link href={`/video/${data.id}`}>
                  <IconButton
                    aria-label={`info about ${data.title}`}
                    className={classes.icon}
                    title="Detail Video"
                  >
                    <InfoIcon />
                  </IconButton>
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default VideoItem;
