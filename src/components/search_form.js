import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import { Field, reduxForm } from 'redux-form';
import { InputText } from './form';


const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'keywords',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });
  return errors;
};

const SearchForm = ({ handleSubmit }) => (
  <div style={{ margin: '20px' }}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Field
            name="keywords"
            component={InputText}
            InputProps={{ placeholder: 'Type a word or phrase' }}
            fullWidth
            margin="normal"
          />
          <div style={{ textAlign: 'right' }}>
            <Button type="submit" raised color="primary">
              Search
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  </div>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'search',
  validate,
})(SearchForm);
