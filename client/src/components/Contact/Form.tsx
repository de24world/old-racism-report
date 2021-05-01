import React from "react";
import { TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Country from "./FormGroup/Country";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <>
      <Country />
      대량 데이터는 이메일로 보내주세요
    </>
  );
};

export default Form;
