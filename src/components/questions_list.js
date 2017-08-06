import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionItem from './question_item';
import ShowMore from './show_more';

const QuestionList = ({ isFetching, data, keywords }) => {
  const questions = data.map(q => <QuestionItem key={q.id} {...q} />);
  if (!isFetching && keywords && data.length === 0) {
    return (<div className="questions-list text-center">
      {`There are no matches for the search "${keywords}"`}
    </div>);
  }
  return (
    <div className="questions-list">
      {questions}
      {questions}
      <ShowMore />
    </div>
  );
};

QuestionList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool.isRequired,
  keywords: PropTypes.string.isRequired,
};

const mapStateToProps = ({ questions }) => ({
  ...questions,
});

export default connect(mapStateToProps)(QuestionList);
