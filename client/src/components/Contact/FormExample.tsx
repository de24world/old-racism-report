import React from "react";

// Material UI
import { makeStyles, withStyles, Typography, Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
  },
}));

interface Props {}

const FormExample = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography>대량 데이터는 이메일로 보내주세요</Typography>

      <Paper className={classes.paper}>
        example
        <br />
        &#123;
        <br />
        offender: "Asian guy",
        <br />
        victim: "Black guy",
        <br />
        time: "2020-Jan",
        <br />
        country: "USA",
        <br />
        countryCode: "US",
        <br />
        city: "Boston",
        <br />
        evidence: "https://youtu.be/dWehG6U2JOo",
        <br />
        level: "1",
        <br /> &#125;
      </Paper>
    </div>
  );
};

export default FormExample;
