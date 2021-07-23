import React, { useState } from "react";

// Next
import { useRouter } from "next/router";
import Link from "next/link";

// Libarary
import ReactPlayer from "react-player";
import ReactCountryFlag from "react-country-flag";

// Material UI
import {
  useTheme,
  makeStyles,
  useMediaQuery,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import InfoIcon from "@material-ui/icons/Info";

// interface
import { IDataProps } from "../../interfaces/interfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: "1rem",
    paddingBottom: "1rem",

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
  iconButton: {
    color: "white",
  },
  pagination: { paddingTop: "2rem" },
}));

interface Props {
  data: IDataProps[];
}

function VideoList({ data }: Props): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router;

  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("md"));
  // https://codesandbox.io/s/usemediaquery-3-options-pm88p?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js:27-80

  const [page, setPage] = useState(1);
  const pageChange = (event: React.ChangeEvent, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={matchesLg ? 1 : 4}>
        {/* <GridListTile key="Subheader" cols={3}>
          <ListSubheader component="div">VideoList</ListSubheader>
        </GridListTile> */}
        {data.map((video) => (
          <GridListTile key={video.id} className={classes.gridListTile}>
            <ReactPlayer url={video.evidence} width="100%" height="100%" />
            <GridListTileBar
              className={classes.girdListTileBar}
              title={
                <span>
                  <ReactCountryFlag countryCode={video.countryCode} />
                  {video.country} {video.city}
                </span>
              }
              subtitle={
                <p>
                  offender: {video.offender}
                  victim: {video.victim}
                  time: {video.time}
                  level: {video.level}
                </p>
              }
              actionIcon={
                <Link href={`/${locale}/video/${video.id}`}>
                  <IconButton
                    // aria-label={`info about ${data.title}`}
                    className={classes.iconButton}
                    title="더보기"
                  >
                    <InfoIcon />
                  </IconButton>
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Pagination
        className={classes.pagination}
        count={10}
        page={page}
        onChange={pageChange}
      />
      {/* Page: {page} */}
    </div>
  );
}

export default VideoList;
