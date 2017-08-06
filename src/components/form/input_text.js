import React from 'react';
import TextField from 'material-ui/TextField';

const InputText = ({ input, meta: { touched, error }, ...custom }) => (
  <TextField
    error={touched && !!error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

// InputProps={{ placeholder: 'Type a word or phrase' }}
// fullWidth
// margin="normal"

export default InputText;
