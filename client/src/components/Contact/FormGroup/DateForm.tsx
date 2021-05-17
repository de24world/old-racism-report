import React, { useState } from "react";

// Libarary
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";

// Materail UI
import { TextField } from "@material-ui/core";

type FormValues = {
  DatePicker: string;
};

const DateForm = () => {
  const { handleSubmit, control } = useForm<FormValues>();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      {/* https://material-ui.com/components/pickers/ */}
      {/* <form onSubmit={handleSubmit((data) => console.log(data))}> */}
      <Controller
        control={control}
        name="DatePicker"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
          />
        )}
      />
      {/*
        <input type="submit" />
      </form> */}
    </>
  );
};

export default DateForm;
