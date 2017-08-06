import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Answer = ({ text }) => (
  <div style={{ margin: '20px' }}>
    <Card>
      <CardContent>
        <Typography type="body1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  </div>
);

Answer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Answer;
