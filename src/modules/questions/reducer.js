import { combineReducers } from 'redux';

import * as actionTypes from './action_types';

/* Initial State
  isFetching: false,
  page: 0,
  total: 0,
  data: [],
  keywords: '',
*/

function isFetching(state = false, action) {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_REQUEST:
      return true;
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return false;
    default:
      return state;
  }
}

function data(state = [], action) {
  switch (action.type) {
    case actionTypes.CLEAR_QUESTIONS:
    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return [];
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}

function total(state = 0, action) {
  switch (action.type) {
    case actionTypes.CLEAR_QUESTIONS:
    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return 0;
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return action.payload.total;
    default:
      return state;
  }
}

function page(state = 1, action) {
  switch (action.type) {
    case actionTypes.CLEAR_QUESTIONS:
    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return 1;
    case actionTypes.ADD_PAGE:
      return state + 1;
    case actionTypes.SET_PAGE:
      return action.page;
    default:
      return state;
  }
}

function keywords(state = '', action) {
  switch (action.type) {
    case actionTypes.CLEAR_QUESTIONS:
      return '';
    case actionTypes.SET_KEYWORDS:
      return action.keywords;
    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  data,
  total,
  page,
  keywords,
});
