import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link } from 'react-router-dom';

import { fetchQuestions, clearQuestions, setKeywords } from '../modules/questions';
import SearchForm from '../components/search_form';
import QuestionList from '../components/questions_list';

class Search extends Component {
  static propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    clearQuestions: PropTypes.func.isRequired,
    setKeywords: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    keywords: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit({ keywords }) {
    this.props.clearQuestions();
    this.props.setKeywords(keywords);
    this.props.fetchQuestions(keywords);
  }
  render() {
    const { isFetching, keywords } = this.props;
    return (
      <div>
        {isFetching && <LinearProgress />}
        <SearchForm initialValues={{ keywords }} onSubmit={this.submit} />
        <QuestionList />
        <div className="float-button">
          <Link to="/new">
            <Button fab color="primary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  isFetching: questions.isFetching,
  keywords: questions.keywords,
});

const mapDispatchToProps = {
  fetchQuestions,
  setKeywords,
  clearQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
