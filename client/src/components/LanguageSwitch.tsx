import React from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// Material
import { TextField, makeStyles } from "@material-ui/core/";
import TranslateIcon from "@material-ui/icons/Translate";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      color: theme.palette.primary.light,
    },
    position: "relative",
    right: "1rem",
  },
  translateIcon: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
  language: {
    width: "auto",
  },
}));

function LanguageSwitch(props: Props): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <TranslateIcon className={classes.translateIcon} />

      <Link href="/" locale={router.locale === "en" ? "ko" : "en"}>
        <button>언어 바꾸기</button>
      </Link>

      {/* <TextField
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
      </TextField> */}
    </div>
  );
}

export default LanguageSwitch;
