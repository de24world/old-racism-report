import React, { useState } from "react";

// Libarary
import { useForm, Controller } from "react-hook-form";

// Material UI
import {
  Grid,
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
  Typography,
} from "@material-ui/core/";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

// Source FormGroup Component
import Countries from "./FormGroup/Countries";
import DataForm from "./FormGroup/DateForm";
import TextInput from "./FormGroup/TextInput";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingBottom: "3rem",
    // "& .MuiTextField-root": {
    //   margin: theme.spacing(1),
    // },
    // padding: theme.spacing(5),
    // backgroundColor: theme.palette.secondary.dark,
  },
  radioGroup: {
    flexDirection: "row",
  },
  formControl: {
    width: "100%",
  },
  formButton: {
    position: "absolute",
    width: "100%",
  },
}));

type FormValues = {
  // https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw?file=/src/index.tsx:1129-1496
  TextField: string;
  offender: string;
  victim: string;
  city: string;
  level: number;
};

function Form() {
  const classes = useStyles();

  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="form __block">
      <Typography variant="h5" gutterBottom>
        Send us a Racism Report
      </Typography>
      <div className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Offender</InputLabel>
                <Controller
                  name="offender"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select label="Offender" {...field}>
                      <MenuItem value="asian guy">Asian guy</MenuItem>
                      <MenuItem value="asian women">Asian women</MenuItem>
                      <MenuItem value="black guy">Black guy</MenuItem>
                      <MenuItem value="black women">Black women</MenuItem>
                      <MenuItem value="white guy">White guy</MenuItem>
                      <MenuItem value="white women">White women</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              {errors.offender && (
                <Alert severity="error">This is required</Alert>
              )}
            </Grid>

            {/* Victim */}
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Victim</InputLabel>
                <Controller
                  name="victim"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select label="Victim" {...field}>
                      <MenuItem value="asian guy">Asian guy</MenuItem>
                      <MenuItem value="asian women">Asian women</MenuItem>
                      <MenuItem value="black guy">Black guy</MenuItem>
                      <MenuItem value="black women">Black women</MenuItem>
                      <MenuItem value="white guy">White guy</MenuItem>
                      <MenuItem value="white women">White women</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              {errors.victim && (
                <Alert severity="error">This is required</Alert>
              )}
            </Grid>

            {/* Country */}
            <Grid item xs={12} sm={6}>
              <Countries control={control} errors={errors} />
            </Grid>

            {/* City */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="City Name"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              {errors.city && <Alert severity="error">This is required</Alert>}
            </Grid>

            {/* <DataForm /> */}
            <Grid item xs={12} sm={6}>
              <DataForm />
            </Grid>
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

            {/* Evidence */}
            <Grid item xs={12} sm={6}>
              <TextInput control={control} errors={errors} />
            </Grid>

            {/* Level */}
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Level</FormLabel>
                <Controller
                  name="level"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup {...field} className={classes.radioGroup}>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="1"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="2"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
              {errors.level && <Alert severity="error">This is required</Alert>}
            </Grid>
            <Grid item>
              <Button
                className={classes.formButton}
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Form;
