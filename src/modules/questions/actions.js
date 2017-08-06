import * as actionTypes from './action_types';
import { get } from '../../helpers/api';

const END_POINT = process.env.REACT_APP_ENDPOINT_QUESTIONS;

export function clearQuestions() {
  return {
    type: actionTypes.CLEAR_QUESTIONS,
  };
}

export function fetchQuestions(keywords = '', page = 1) {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_PAGE, page });
    dispatch({ type: actionTypes.FETCH_QUESTIONS_REQUEST });
    const url = `${END_POINT}?keywords=${keywords}&page=${page}`;
    return get(url)
      .then(response => dispatch({ type: actionTypes.FETCH_QUESTIONS_SUCCESS, payload: response }))
      .catch((response) => {
        console.log(response);
        dispatch({ type: actionTypes.FETCH_QUESTIONS_FAILURE });
      });
  };
}

export function setKeywords(keywords) {
  return {
    type: actionTypes.SET_KEYWORDS,
    keywords,
  };
}

export function setPage(page) {
  return {
    type: actionTypes.SET_PAGE,
    page,
  };
}

export function addPage() {
  return {
    type: actionTypes.ADD_PAGE,
  };
}

export function addQuestion() {}
