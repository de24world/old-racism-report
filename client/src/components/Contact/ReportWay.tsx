import React from "react";

// Libarary
import ReactPlayer from "react-player";

// Material UI
import { makeStyles, Typography, Grid, Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

interface Props {}

const ReportWay = (props: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div className="reportway __block">
      <Typography variant="h5" gutterBottom>
        How can I report?
      </Typography>

      <Grid container spacing={3}>
        <Grid item lg={6}>
          <ReactPlayer
            url="https://youtu.be/iiADhChRriM"
            width="100%"
            height="100%"
          />
        </Grid>

        <Grid item lg={6}>
          <Paper className={classes.paper}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            consequatur facilis dolores adipisci corporis sapiente, quas quasi
            harum magni laboriosam cumque, cum id impedit eos veritatis est
            corrupti ut odit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deleniti consequatur facilis dolores adipisci corporis
            sapiente, quas quasi harum magni laboriosam cumque, cum id impedit
            eos veritatis est corrupti ut odit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti consequatur facilis dolores
            adipisci corporis sapiente, quas quasi harum magni laboriosam
            cumque, cum id impedit eos veritatis est corrupti ut odit! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            consequatur facilis dolores adipisci corporis sapiente, quas quasi
            harum magni laboriosam cumque, cum id impedit eos veritatis est
            corrupti ut odit!
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReportWay;
