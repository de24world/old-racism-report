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
  root: {},

  language: {
    // marginTop: theme.spacing(1),
    width: "auto",
  },
}));

const LanguageSwitch = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div>
      <TranslateIcon />

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
          Change Language
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
