import React, { useState } from "react";

// Libarary
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Material UI
import {
  Grid,
  Container,
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
    marginTop: theme.spacing(5),
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
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Send us Reacism Report
        </Typography>
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

            <Grid item xs={12} sm={6}>
              <Countries control={control} errors={errors} />
            </Grid>

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

            <Grid item xs={12}>
              <TextInput control={control} errors={errors} />
            </Grid>

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
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography>대량 데이터는 이메일로 보내주세요</Typography>
      </Container>
    </div>
  );
}

export default Form;
