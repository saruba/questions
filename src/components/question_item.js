import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Highlighter from 'react-highlight-words';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';


const QuestionItem = ({ id, text, answers, keywords }) => (
  <div style={{ margin: '20px' }}>
    <Card>
      <CardContent>
        <Link to={`question/${id}`}>
          <Typography type="body1">
            <Highlighter
              highlightClassName="highlight"
              highlightTag="span"
              searchWords={keywords.split(' ')}
              textToHighlight={text}
            />
          </Typography>
          <Typography type="body2" style={{ textAlign: 'right' }}>
            <strong>{answers} answers</strong>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  </div>
);

QuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  answers: PropTypes.number.isRequired,
};

const mapStateToProps = ({ questions }) => ({
  keywords: questions.keywords,
});

export default connect(mapStateToProps)(QuestionItem);
