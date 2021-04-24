import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  navigation: {
    // flexGrow: 4,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const [selectLang, setSelectLang] = useState("");

  const changeLanguage = (e) => {
    const newLanguage = e.target.value;
    if (selectLang !== newLanguage) {
      setSelectLang(newLanguage);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            // display={{ desktop: "none" }}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t("Racism Report App")}
          </Typography>
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
            <Link href="/statistics">
              <Button color="inherit">{t("Static")}</Button>
            </Link>
            <Link href="/contact">
              <Button color="inherit">{t("Report")}</Button>
            </Link>

            <Link href="" locale="en">
              <button>{t("English")}</button>
            </Link>
            <Link href="" locale="ko">
              <button>{t("Korean")}</button>
            </Link>

            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Select Langauge
              </InputLabel>
              <Select value={selectLang} onChange={changeLanguage}>
                <MenuItem value="en">{t("English")}</MenuItem>
                <MenuItem value="ko">{t("Korean")}</MenuItem>
              </Select>
            </FormControl> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
