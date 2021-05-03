import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

import countries from "./Country.json";

// https://material-ui.com/components/autocomplete/#country-select

interface Props {
  code: string;
  label: string;
  phone: string;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const Country = (props: Props) => {
  const classes = useStyles();

  function countryToFlag(isoCode: string) {
    return typeof String.fromCodePoint !== "undefined"
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  }

  return (
    <div>
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={countries as CountryType[]}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>
            <span>{countryToFlag(option.code)}</span>
            {option.label} ({option.code})
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
};

export default Country;
