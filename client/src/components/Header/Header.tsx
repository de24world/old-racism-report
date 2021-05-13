import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import AssessmentIcon from "@material-ui/icons/Assessment";

// Source Component
import LanguageSwitch from "../LanguageSwitch";
import MobileHeader from "./MobileHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    flexGrow: 1,
    wordBreak: "keep-all",
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
  navigation: {},
}));

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AssessmentIcon />
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <Button color="inherit">{t("Racism Report App")}</Button>
            </Link>
          </Typography>

          <LanguageSwitch />
          {isMobile ? (
            <MobileHeader />
          ) : (
            <div className={classes.navigation}>
              <Link href="/">
                <Button color="inherit">{t("Home")}</Button>
              </Link>
              <Link href="/list">
                <Button color="inherit">{t("List")}</Button>
              </Link>
              <Link href="/video">
                <Button color="inherit">{t("Video")}</Button>
              </Link>
              <Link href="/chart">
                <Button color="inherit">{t("Chart")}</Button>
              </Link>
              <Link href="/contact">
                <Button color="inherit">{t("Report")}</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
