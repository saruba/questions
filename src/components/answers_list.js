import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

import AnswerItem from './answer_item';

const AnswersList = ({ answers }) => {
  const answerItems = answers.map(a => <AnswerItem key={`answer${a.id}`} {...a} />);
  return (
    <div style={{ padding: '20px' }}>
      <Typography type="title" component="p">
        Answers
      </Typography>
      {answerItems}
    </div>
  );
};

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AnswersList;
