import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import { Field, reduxForm } from 'redux-form';
import { InputText } from './form';


const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'name',
    'text',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });
  return errors;
};

const QuestionForm = ({ handleSubmit }) => (
  <div style={{ margin: '20px' }}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            component={InputText}
            InputProps={{ placeholder: 'Your name' }}
            fullWidth
            margin="normal"
          />
          <Field
            name="text"
            component={InputText}
            InputProps={{ placeholder: 'Write your question here' }}
            fullWidth
            multiline
            rows="4"
            margin="normal"
          />
          <div style={{ textAlign: 'right' }}>
            <Button type="submit" raised color="primary">
              Save
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  </div>
);

QuestionForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'question',
  validate,
})(QuestionForm);
