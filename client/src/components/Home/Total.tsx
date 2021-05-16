import React, { ReactElement } from "react";

// interface
import { IDataProps } from "../../interfaces/interfaces";

// Material UI
import {
  makeStyles,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
  },
}));

interface Props {
  data: IDataProps;
}

function Total({ data }: Props): ReactElement {
  const classes = useStyles();
  const totalNumber = Object.keys(data).length;
  // console.log(totalNumber, "totalNumber in Total");

  return (
    <>
      {/* https://coronaboard.kr/ */}
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h4" color="primary" gutterBottom>
          Total Report
        </Typography>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              총 사건 발생 수
            </Typography>
            <Typography variant="h6" component="h2">
              {totalNumber}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default Total;
