import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState } from "react";

// next Libarary;

// material UI
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core/";
import AssessmentIcon from "@material-ui/icons/Assessment";

// Source Component
import LanguageSwitch from "../LanguageSwitch";

import MobileHeader from "./MobileHeader";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
}));

const Header = function() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation("common");

  return (
    <AppBar position="static">
        <Toolbar>
          <AssessmentIcon />
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <Button color="inherit">{t("Racism Report")}</Button>
            </Link>
          </Typography>

          <LanguageSwitch />
          {isMobile ? (
            <MobileHeader />
          ) : (
            <div>
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
  );
}

export default Header;
