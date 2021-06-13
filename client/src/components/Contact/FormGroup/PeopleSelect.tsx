import React from "react";

// Material UI
import { makeStyles, Select, MenuItem } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface Props {}

const PeopleSelect = (field: Props) => {
  const classes = useStyles();

  return (
    <>
      <Select label="Victim" {...field}>
        <MenuItem value="asian guy">Asian Guy</MenuItem>
        <MenuItem value="asian women">Asian Women</MenuItem>
        <MenuItem value="black guy">Black Guy</MenuItem>
        <MenuItem value="black women">Black Women</MenuItem>
        <MenuItem value="white guy">White Guy</MenuItem>
        <MenuItem value="white women">Black Women</MenuItem>
      </Select>
    </>
  );
};

export default PeopleSelect;
