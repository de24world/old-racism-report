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
import Alert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";

import Countries from "./FormGroup/Countries";
import DataForm from "./FormGroup/DateForm";

type FormValues = {
  // https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw?file=/src/index.tsx:1129-1496
  // Native: string;
  TextField: string;
  // Select: string;
  // ReactSelect: NestedValue<{ value: string; label: string }>;
  // Checkbox: boolean;
  // switch: boolean;
  // RadioGroup: string;
  // MUI_Slider: string;
  // Datepicker: Date;
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Form = () => {
  const classes = useStyles();

  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      대량 데이터는 이메일로 보내주세요
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <Countries control={control} />
        </section>

        <section>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Offender</InputLabel>
            <Controller
              name="offender"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select label="Offender" {...field}>
                  <MenuItem value="black women">Black women</MenuItem>
                  <MenuItem value="black guy">Black guy</MenuItem>
                  <MenuItem value="white guy">White guy</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          {errors.offender && <Alert severity="error">This is required</Alert>}
        </section>

        <Controller
          name="evidence"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Youtube URL"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {errors.evidence && <Alert severity="error">This is required</Alert>}

        {/* <DataForm /> */}
        {/* <Controller
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
        /> */}

        <section>
          <label>Level</label>
          <Controller
            name="level"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
              </RadioGroup>
            )}
          />
          {errors.level && <Alert severity="error">This is required</Alert>}
        </section>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
