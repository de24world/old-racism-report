import React, { useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

interface IDataForm {
  value: Date;
  onChange: Function;
}

const DateForm = function ({ ...field }: IDataForm) {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };

  // data form error
  // https://github.com/react-hook-form/react-hook-form/issues/3411

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <DatePicker
          format="yyyy-MM"
          variant="inline"
          inputVariant="outlined"
          fullWidth
          openTo="year"
          views={['year', 'month']}
          label="Date(Year&Month)"
          helperText="Please select Date from year selection"
          value={field.value}
          onChange={(e) => {
            field.onChange(e);
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DateForm;
