import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  MenuItem,
  Link,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core/";

import TranslateIcon from "@material-ui/icons/Translate";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      color: theme.palette.primary.light,
    },
  },
  translateIcon: {
    marginRight: theme.spacing(1),
  },
  language: {
    marginRight: theme.spacing(2),
    width: "auto",
  },
}));

const LanguageSwitch = (props: Props) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <TranslateIcon className={classes.translateIcon} />

      <TextField
        select
        SelectProps={{
          native: true,
        }}
        className={classes.language}
      >
        <option
          value=""
          onClick={() => {
            router.push("", "", { locale: "" });
          }}
        >
          {t("Language")}
        </option>
        <option
          value="ko"
          onClick={() => {
            router.push("", "", { locale: "ko" });
          }}
        >
          {t("Korean")}
        </option>
        <option
          value="en"
          onClick={() => {
            router.push("", "", { locale: "en" });
          }}
        >
          {t("English")}
        </option>
        ))
      </TextField>
    </div>
  );
};

export default LanguageSwitch;
