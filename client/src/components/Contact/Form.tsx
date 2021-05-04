import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  InputLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import Country from "./FormGroup/Country";
import DataForm from "./FormGroup/DateForm";

type FormValues = {
  // https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw?file=/src/index.tsx:1129-1496
  // Native: string;
  // TextField: string;
  // Select: string;
  // ReactSelect: NestedValue<{ value: string; label: string }>;
  // Checkbox: boolean;
  // switch: boolean;
  // RadioGroup: string;
  // MUI_Slider: string;
  Datepicker: Date;
  // numberFormat: number;
  // downShift: string;
  // country: NestedValue<{ code: string; label: string; phone: string }>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      {/* <Country /> */}
      대량 데이터는 이메일로 보내주세요
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Youtube URL"
          placeholder="example : https://youtu.be/dWehG6U2JOo"
          fullWidth
          variant="outlined"
          {...register("evidence", { required: true })}
        />

        {/* <DataForm /> */}
        <Controller
          control={control}
          name="Datepicker"
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              placeholderText="Select date"
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
