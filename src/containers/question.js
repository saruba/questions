import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';

import { get } from '../helpers/api';
import AnswersList from '../components/answers_list';

const END_POINT = process.env.REACT_APP_ENDPOINT_QUESTIONS;

class Question extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      text: '',
      answers: [],
    };
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    const url = `${END_POINT}/${id}`;
    get(url)
      .then(({ text, answers }) => this.setState({
        isFetching: false,
        text,
        answers,
      }));
  }
  render() {
    const { isFetching, text, answers } = this.state;
    if (isFetching) {
      return <LinearProgress />;
    }
    return (
      <div style={{ padding: '30px' }}>
        <Link to="/">
          <Button raised>
            Back
          </Button>
        </Link>
        <div style={{ padding: '10px 0' }}>
          <Card>
            <CardContent>
              <Typography type="body2" component="p">
                {text}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <AnswersList answers={answers} />
      </div>
    );
  }
}

export default Question;
