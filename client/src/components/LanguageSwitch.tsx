import React from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// Material
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";
import TranslateIcon from "@material-ui/icons/Translate";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      color: theme.palette.primary.light,
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: "5rem",
    },
    "& .MuiInputLabel-formControl": {
      top: "-1rem",
    },
    "& label + .MuiInput-formControl": {
      marginTop: "0",
    },

    position: "relative",
  },
  translateIcon: {
    position: "relative",
    right: "5px",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
}));

function LanguageSwitch(props: Props): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <TranslateIcon className={classes.translateIcon} />

      <FormControl>
        <InputLabel>{t("Language")}</InputLabel>
        <Select>
          <MenuItem>
            <Link href="" locale={(router.locale = "en")}>
              {t("English")}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="" locale={(router.locale = "ko")}>
              {t("Korean")}
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSwitch;
