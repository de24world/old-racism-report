import React from "react";
import * as yup from "yup";

import { useForm, Controller } from "react-hook-form";

import { TextField } from "@material-ui/core/";
import Alert from "@material-ui/lab/Alert";

// https://codesandbox.io/s/928po918qr?file=/src/index.js:104-132

interface Props {}

const TextInput = ({ control, errors }) => {
  return (
    <div>
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
    </div>
  );
};

export default TextInput;
