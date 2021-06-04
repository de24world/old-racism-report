import React, { ReactElement } from "react";

// interface
import { IDataProps } from "../../interfaces/interfaces";

// Material UI
import {
  makeStyles,
  Typography,
  Paper,
  Grid,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    textAlign: "center",
  },
}));

interface Props {
  data: IDataProps[];
  isLoading: boolean;
}

function Total({ data, isLoading }: Props): ReactElement {
  const classes = useStyles();
  const totalOccur = Object.keys(data).length;

  // 피해자 종류
  const victimAsianGuy = data.filter(
    (item) => item.victim === "Asian guy"
  ).length;
  const victimAsianWomen = data.filter(
    (item) => item.victim === "Asian women"
  ).length;
  const victimBlackguy = data.filter(
    (item) => item.victim === "Black guy"
  ).length;
  const victimBlackwomen = data.filter(
    (item) => item.victim === "Black women"
  ).length;
  const victimWhiteguy = data.filter(
    (item) => item.victim === "White guy"
  ).length;
  const victimWhitewomen = data.filter(
    (item) => item.victim === "White women"
  ).length;

  // 가해자 종류
  const offenderAsianGuy = data.filter(
    (item) => item.offender === "Asian guy"
  ).length;
  const offenderAsianWomen = data.filter(
    (item) => item.offender === "Asian women"
  ).length;
  const offenderBlackguy = data.filter(
    (item) => item.offender === "Black guy"
  ).length;
  const offenderBlackwomen = data.filter(
    (item) => item.offender === "Black women"
  ).length;
  const offenderWhiteguy = data.filter(
    (item) => item.offender === "White guy"
  ).length;
  const offenderWhitewomen = data.filter(
    (item) => item.offender === "White women"
  ).length;

  return (
    <div className="total __block">
      <Typography variant="h4" color="primary" gutterBottom>
        Total Report
      </Typography>

      {isLoading ? (
        <CircularProgress className="progressbar" />
      ) : (
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {totalOccur}
              </Typography>
              총 사건 발생 수
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                111
              </Typography>
              총 발생 국가
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                222
              </Typography>
              총 발생 도시
            </Grid>

            {/* 도시 */}
            <Grid item xs={3}>
              <Typography variant="h5" gutterBottom>
                미국 (10)
              </Typography>
              최대 발생 국가
            </Grid>

            <Grid item xs={3}>
              <Typography variant="h5" gutterBottom>
                보스턴 (8)
              </Typography>
              최대 발생 도시
            </Grid>

            <Grid item xs={3}>
              <Typography variant="h5" gutterBottom>
                백인 남성 (2)
              </Typography>
              최대 가해 남성
            </Grid>

            <Grid item xs={3}>
              <Typography variant="h5" gutterBottom>
                아시아 여성(11)
              </Typography>
              최대 도시 국가
            </Grid>

            {/* ------ 피해자 인종 ---------- */}
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                Victim Race
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">{victimAsianGuy}</Typography>
              <Typography gutterBottom>👦🏻 Asian guy</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{victimAsianWomen}</Typography>
              <Typography gutterBottom>👩🏻 Asian women</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{victimBlackguy}</Typography>
              <Typography gutterBottom>👦🏿 Black guy</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{victimBlackwomen}</Typography>
              <Typography gutterBottom>👩🏿‍🦱 Black women</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{victimWhiteguy}</Typography>
              <Typography gutterBottom>👦🏼 White guy</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{victimWhitewomen}</Typography>
              <Typography gutterBottom>👩🏼 White women</Typography>
            </Grid>

            {/* --------- 가해자 인종  ----------- */}
            <Grid item xs={12}>
              <Typography variant="h5" color="error">
                Offender Race
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">{offenderAsianGuy}</Typography>
              <Typography gutterBottom>👦🏻 Asian guy</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{offenderAsianWomen}</Typography>
              <Typography gutterBottom>👩🏻 Asian women</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{offenderBlackguy}</Typography>
              <Typography gutterBottom>👦🏿 Black guy</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{offenderBlackwomen}</Typography>
              <Typography gutterBottom>👩🏿‍🦱 Black women</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{offenderWhiteguy}</Typography>
              <Typography gutterBottom>👦🏼 White guy</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">{offenderWhitewomen}</Typography>
              <Typography gutterBottom>👩🏼 White women</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}

export default Total;
