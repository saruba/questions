import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import { reducer as questions } from './modules/questions';
import questions from './questions/reducer';

export default combineReducers({
  questions,
  form: formReducer,
});
