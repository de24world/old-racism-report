import React from "react";

// interface
import { IDataProps } from "../../interfaces/interfaces";

// Next
import { useTranslation } from "next-i18next";

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

interface totalProps {
  data: IDataProps[];
}

function Total({ data }: totalProps): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation("common");
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
      <Typography variant="h5" gutterBottom>
        {t("Total Report")}
      </Typography>

      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {totalOccur}
            </Typography>
            {t("Total Number of Incidents")}
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              111
            </Typography>
            {t("Total Country of occurrence")}
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              222
            </Typography>
            {t("Total occurrence City")}
          </Grid>

          {/* 도시 */}
          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom>
              미국 (10)
            </Typography>
            {t("Maximum Country of Occurrence")}
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom>
              보스턴 (8)
            </Typography>
            {t("Maximum City of Occurrence")}
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom>
              백인 남성 (2)
            </Typography>
            {t("Maximum Offender Race")}
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom>
              아시아 여성(11)
            </Typography>
            {t("Maximum Victim Race")}
          </Grid>

          {/* ------ 피해자 인종 ---------- */}
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              {t("Victim Race")}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5">{victimAsianGuy}</Typography>
            <Typography gutterBottom>👦🏻 {t("Asian Guy")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{victimAsianWomen}</Typography>
            <Typography gutterBottom>👩🏻 {t("Asian Women")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{victimBlackguy}</Typography>
            <Typography gutterBottom>👦🏿 {t("Black Guy")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{victimBlackwomen}</Typography>
            <Typography gutterBottom>👩🏿‍🦱 {t("Black Women")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{victimWhiteguy}</Typography>
            <Typography gutterBottom>👦🏼 {t("White Guy")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{victimWhitewomen}</Typography>
            <Typography gutterBottom>👩🏼 {t("White Women")}</Typography>
          </Grid>

          {/* --------- 가해자 인종  ----------- */}
          <Grid item xs={12}>
            <Typography variant="h5" color="error">
              {t("Offender Race")}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5">{offenderAsianGuy}</Typography>
            <Typography gutterBottom>👦🏻 {t("Asian Guy")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{offenderAsianWomen}</Typography>
            <Typography gutterBottom>👩🏻 {t("Asian Women")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{offenderBlackguy}</Typography>
            <Typography gutterBottom>👦🏿 {t("Black Guy")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{offenderBlackwomen}</Typography>
            <Typography gutterBottom>👩🏿‍🦱 {t("Black Women")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{offenderWhiteguy}</Typography>
            <Typography gutterBottom>👦🏼 {t("White Guy")}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5">{offenderWhitewomen}</Typography>
            <Typography gutterBottom>👩🏼 {t("White Women")}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Total;
