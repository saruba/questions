import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { fetchQuestions } from '../modules/questions';

class ShowMore extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchQuestions: PropTypes.func.isRequired,
  }
  handleClick() {
    const { page } = this.props;
    this.props.fetchQuestions(null, page + 1);
  }
  render() {
    const { total, data } = this.props;
    const show = total > data.length;
    if (show) {
      return (
        <div style={{ textAlign: 'center' }}>
          <Button color="primary" onClick={() => this.handleClick()} >
            Show more
          </Button>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ questions }) => ({
  total: questions.total,
  data: questions.data,
  page: questions.page,
});

const mapDispatchToProps = {
  fetchQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
