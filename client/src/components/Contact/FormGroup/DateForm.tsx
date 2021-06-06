import React, { useState } from "react";

// Libarary
import DateFnsUtils from "@date-io/date-fns";

// Materail UI
import { Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const DateForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(""));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <DatePicker
            variant="inline"
            inputVariant="outlined"
            fullWidth
            openTo="year"
            views={["year", "month"]}
            label="Time(Year&Month)"
            helperText="Start from year selection"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DateForm;
