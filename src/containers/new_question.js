import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';

import QuestionForm from '../components/question_form';
import NewQuestionSuccess from '../components/new_question_success';
import { post } from '../helpers/api';

const END_POINT = process.env.REACT_APP_ENDPOINT_QUESTIONS;

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      loading: false,
      success: false,
    };
  }
  submit(values) {
    this.setState({ loading: true });
    post(END_POINT, values).then(() => this.setState({
      success: true,
      loading: false,
    }));
  }
  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && <LinearProgress />}
        {!success && <QuestionForm onSubmit={this.submit} />}
        {success && <NewQuestionSuccess />}
      </div>
    );
  }
}

export default NewQuestion;
