import React from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";

// Libarary
import ReactCountryFlag from "react-country-flag";

// Material
import {
  makeStyles,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@material-ui/core/";
// import TranslateIcon from "@material-ui/icons/Translate";

interface Props {}

const useStyles = makeStyles((theme) => ({
  LanguageSwitch: {
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
    marginRight: "1rem",
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
  const { asPath } = useRouter();

  // const { t } = useTranslation("common");

  return (
    <div className={classes.LanguageSwitch}>
      {/* <TranslateIcon className={classes.translateIcon} /> */}
      <Link href={asPath} locale="en" passHref>
        <a>
          <ReactCountryFlag
            countryCode="US"
            style={{
              fontSize: "3em",
              padding: "0.5rem",
              cursor: "pointer",
            }}
            aria-label="United States"
          />
        </a>
      </Link>

      <Link href={asPath} locale="ko" passHref>
        <a>
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="KR"
            style={{
              fontSize: "3em",
              padding: "0.5rem",
              cursor: "pointer",
            }}
            aria-label="South Korea"
          />
        </a>
      </Link>

      {/*
      <FormControl>
        <InputLabel>{t("Language")}</InputLabel>
        <Select>
          <MenuItem>
            <Link href="" locale="en">
              {t("English")}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="" locale="ko">
              {t("Korean")}
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
       */}
    </div>
  );
}

export default LanguageSwitch;
