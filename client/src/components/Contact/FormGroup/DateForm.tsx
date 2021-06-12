import React, { useState } from "react";

// Libarary
import DateFnsUtils from "@date-io/date-fns";

// Materail UI
import { Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

interface IDataForm {
  field: any;
  value: any;
}

const DateForm = ({ value, onChange }) => {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <DatePicker
            format="MM/yyyy"
            variant="inline"
            inputVariant="outlined"
            fullWidth
            openTo="year"
            views={["year", "month"]}
            label="Time(Year&Month)"
            helperText="Please select Date from year selection"
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DateForm;
