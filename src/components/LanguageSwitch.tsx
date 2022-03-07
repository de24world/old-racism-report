import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  LanguageSwitch: {
    '& .MuiInputBase-root': {
      color: theme.palette.primary.light,
    },
    '& .MuiSelect-select.MuiSelect-select': {
      paddingRight: '5rem',
    },
    '& .MuiInputLabel-formControl': {
      top: '-1rem',
    },
    '& label + .MuiInput-formControl': {
      marginTop: '0',
    },
    marginRight: '1rem',
    position: 'relative',
  },
  translateIcon: {
    position: 'relative',
    right: '5px',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
    },
  },
}));

const LanguageSwitch = function (): JSX.Element {
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
            svg
            style={{
              fontSize: '3em',
              padding: '0.5rem',
              cursor: 'pointer',
            }}
            aria-label="United States"
          />
        </a>
      </Link>

      <Link href={asPath} locale="ko" passHref>
        <a>
          <ReactCountryFlag
            className="emojiFlag"
            svg
            countryCode="KR"
            style={{
              fontSize: '3em',
              padding: '0.5rem',
              cursor: 'pointer',
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
};

export default LanguageSwitch;
